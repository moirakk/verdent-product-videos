const assert = require('node:assert/strict');
const path = require('node:path');
const os = require('node:os');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const url = process.env.EP07_URL || 'http://127.0.0.1:8768/EP07-deep-research.html';
const times = [1.6, 2.9, 3.5, 4.5, 5.55, 6.3, 7.65, 8.5, 9.6, 10.7, 12, 15.6, 17.2, 20.6, 21.3, 22.4, 25.8, 31];
const boundaries = [0, .8, 2.65, 2.7, 3.3, 3.8, 4.55, 5.15, 5.95, 7.25, 8.05, 9.1, 9.75, 10.25, 11.1, 14.8, 15.3, 16.25, 20.25, 20.65, 21.35, 21.4, 22.6, 29.35, 30.1];

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
    const connectedSurfaces = await page.evaluate(() => {
      const input = [1.6, 2.7, 3, 3.5, 3.9].map(t => { seek(t); return { ...motionState }; });
      const report = [19, 20.65, 21, 21.5, 22, 22.6, 26].map(t => { seek(t); return { ...motionState }; });
      return { input, report };
    });
    assert.equal(new Set(connectedSurfaces.input.map(s => s.inputSourceId)).size, 1);
    assert.ok(connectedSurfaces.input.every(s => s.inputScale > .99), 'Input/source surface disappears at the handoff');
    assert.equal(new Set(connectedSurfaces.report.map(s => s.questionReportId)).size, 1);
    assert.ok(connectedSurfaces.report.every(s => s.reportScale > .99), 'Question/report surface disappears at the handoff');
    assert.equal(connectedSurfaces.report.at(-1).reportWidth, 334);
    assert.equal(connectedSurfaces.report.at(-1).reportHeight, 350);
    for (const [name, width, height] of [['desktop', 1280, 900], ['mobile', 390, 844], ['small', 320, 568]]) {
      await page.setViewportSize({ width, height });
      for (const time of times) {
        await page.evaluate(t => seek(t), time);
        const overflow = await page.evaluate(() => [...document.querySelectorAll('.line,.prompt,.caption,.source')].filter(el => el.scrollWidth > el.clientWidth + 2 || (!el.matches('.line') && el.scrollHeight > el.clientHeight + 2)).map(el => el.className));
        assert.deepEqual(overflow, [], `Text overflow at ${name}/${time}`);
        await page.locator('.film').screenshot({ path: path.join(os.tmpdir(), `ep07-${name}-${time}.png`) });
      }
    }
    for (const time of times.filter(t => t < 30)) {
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
