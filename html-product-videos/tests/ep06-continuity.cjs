const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const url = process.env.EP06_URL || 'http://127.0.0.1:8768/EP06-document-analysis.html';
const boundaries = [0, 2.25, 3, 5.9, 6, 6.5, 7.3, 10.8, 11, 11.45, 16.7, 17, 18.2, 22.5, 22.8, 23.3, 24.2, 28.8, 29];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 430, height: 764 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url);
    await page.waitForFunction(() => typeof window.seek === 'function');
    const changes = [];
    for (const time of boundaries) {
      const frames = [];
      for (const offset of [-0.001, 0.001]) {
        frames.push(await page.evaluate(t => {
          window.seek(t);
          const canvas = document.createElement('canvas');
          canvas.width = 215; canvas.height = 250;
          const context = canvas.getContext('2d');
          context.fillStyle = '#fbfdfb'; context.fillRect(0, 0, 215, 250);
          context.drawImage(document.querySelector('.volume canvas'), 0, 0, 215, 250);
          return Array.from(context.getImageData(0, 0, 215, 250).data);
        }, time + offset));
      }
      let difference = 0;
      for (let i = 0; i < frames[0].length; i++) {
        if (i % 4 !== 3) difference += Math.abs(frames[0][i] - frames[1][i]);
      }
      const mean = difference / (215 * 250 * 3);
      changes.push({ time, mean: Number(mean.toFixed(3)) });
      assert.ok(mean < 1, `Abrupt frame change at ${time}s: ${mean}`);
    }
    const example = await page.evaluate(() => documentExample);
    assert.equal(example.illustrative, true);
    assert.deepEqual(example.evidence.map(e => e.page), ['04', '18', '27']);
    assert.deepEqual(example.evidence.map(e => e.answer), ['October 12', 'Email + website', 'Not assigned']);
    if (process.env.FULL_PLAYBACK) await page.evaluate(() => restart());
    else await page.evaluate(() => { seek(31.7); play(); });
    await page.waitForFunction(() => filmTime === 32, {}, { timeout: 60000 });
    await page.waitForTimeout(350);
    assert.equal(await page.evaluate(() => filmTime), 32);
    assert.equal(await page.locator('.endcard').evaluate(el => getComputedStyle(el).opacity), '1');
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ changes, tailHold: true, errors }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
