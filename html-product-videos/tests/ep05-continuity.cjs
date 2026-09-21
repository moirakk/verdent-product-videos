const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const url = process.env.EP05_URL || 'http://127.0.0.1:8768/EP05-data-analysis.html';
const boundaries = [5.95, 6.6, 10, 11.3, 15.5, 18.7, 18.83, 18.96, 20.2, 24.02, 24.05, 24.65, 29.4];

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
          canvas.width = 215;
          canvas.height = 250;
          const context = canvas.getContext('2d');
          context.fillStyle = '#fbfdfb';
          context.fillRect(0, 0, 215, 250);
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
    const analysis = await page.evaluate(() => window.analysis);
    assert.equal(analysis.percent, -20);
    assert.equal(analysis.paidDelta + analysis.otherDelta, analysis.delta);
    await page.evaluate(() => { window.seek(31.8); window.play(); });
    await page.waitForFunction(() => window.filmTime === 32);
    await page.waitForTimeout(350);
    assert.equal(await page.evaluate(() => window.filmTime), 32);
    assert.equal(await page.locator('.endcard').evaluate(el => getComputedStyle(el).opacity), '1');
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ changes, tailHold: true, errors }));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
