const assert = require('node:assert/strict');
const path = require('node:path');
const os = require('node:os');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const url = process.env.EP07_URL || 'http://127.0.0.1:8768/EP07-deep-research.html';
const times = [1.6, 4.8, 6.4, 7.6, 9.5, 11.8, 13.5, 17.7, 20, 23.8, 25.8, 31];
const boundaries = [0, .85, 1.65, 2.05, 2.1, 2.95, 3, 5.45, 5.5, 6, 6.45, 7.2, 7.52, 10.8, 11.5, 12.8, 16.65, 17.05, 18.4, 22.65, 23, 24.3, 25.15, 29.35, 30.1];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const errors = [], frames = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    await page.goto(url);
    await page.waitForFunction(() => typeof window.seek === 'function');
    const example = await page.evaluate(() => researchExample);
    assert.equal(example.illustrative, true);
    assert.deepEqual(example.sources.map(s => s.price), [12, 18, 24]);
    assert.equal(example.lowestBasePrice, 'Tool A');
    assert.equal(example.sources[1].reminders, 'Add-on; price not listed');
    assert.ok(example.sources.every(s => s.domain.includes('.example/')));
    for (const [name, width, height] of [['desktop', 1280, 900], ['mobile', 390, 844], ['small', 320, 568]]) {
      await page.setViewportSize({ width, height });
      for (const time of times) {
        await page.evaluate(t => seek(t), time);
        const overflow = await page.evaluate(() => [...document.querySelectorAll('.line,.prompt,.caption,.source')].filter(el => el.scrollWidth > el.clientWidth + 2 || (!el.matches('.line') && el.scrollHeight > el.clientHeight + 2)).map(el => el.className));
        assert.deepEqual(overflow, [], `Text overflow at ${name}/${time}`);
        await page.locator('.film').screenshot({ path: path.join(os.tmpdir(), `ep07-${name}-${time}.png`) });
      }
    }
    for (const time of times.filter(t => t !== 4.8 && t < 30)) {
      const pixels = await page.evaluate(t => {
        seek(t);
        const canvas = document.createElement('canvas'); canvas.width = 430; canvas.height = 500;
        const context = canvas.getContext('2d'); context.drawImage(document.querySelector('.volume canvas'), 0, 0, 430, 500);
        const rgba = context.getImageData(0, 0, 430, 500).data;
        let count = 0, minX = 430, minY = 500, maxX = 0, maxY = 0;
        for (let i = 3; i < rgba.length; i += 4) if (rgba[i] > 40) {
          count++; const x = (i >> 2) % 430, y = Math.floor((i >> 2) / 430);
          minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
        return { count, minX, minY, maxX, maxY };
      }, time);
      assert.ok(pixels.count > 1000, `Blank canvas at ${time}`);
      assert.ok(pixels.minX > 0 && pixels.minY > 0 && pixels.maxX < 429 && pixels.maxY < 499, `Clipped canvas at ${time}: ${JSON.stringify(pixels)}`);
      frames.push({ time, ...pixels });
    }
    const continuity = [];
    for (const time of boundaries) {
      const mean = await page.evaluate(t => {
        const canvas = document.createElement('canvas'); canvas.width = 215; canvas.height = 250;
        const context = canvas.getContext('2d');
        const frame = n => { seek(n); context.fillStyle = '#fbfdfb'; context.fillRect(0, 0, 215, 250); context.drawImage(document.querySelector('.volume canvas'), 0, 0, 215, 250); return context.getImageData(0, 0, 215, 250).data; };
        const a = frame(t - .001), b = frame(t + .001); let sum = 0;
        for (let i = 0; i < a.length; i++) if (i % 4 !== 3) sum += Math.abs(a[i] - b[i]);
        return sum / (215 * 250 * 3);
      }, time);
      assert.ok(mean < 1, `Abrupt transition at ${time}: ${mean}`);
      continuity.push({ time, mean: +mean.toFixed(3) });
    }
    assert.ok(await page.locator('.logo').evaluate(img => img.complete && img.naturalWidth > 0));
    if (process.env.FULL_PLAYBACK) await page.evaluate(() => restart());
    else await page.evaluate(() => { seek(32.7); play(); });
    await page.waitForFunction(() => filmTime === 33, {}, { timeout: 60000 });
    await page.waitForTimeout(350);
    assert.equal(await page.evaluate(() => filmTime), 33);
    assert.equal(await page.locator('.endcard').evaluate(el => getComputedStyle(el).opacity), '1');
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ errors, frames, continuity, tailHold: true }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
