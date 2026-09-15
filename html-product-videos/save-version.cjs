const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const [version, description] = process.argv.slice(2);
if (!/^v\d{3}$/.test(version || '') || !description) {
  throw new Error('Usage: node save-version.cjs v007 "Description"');
}
const root = __dirname;
const destination = path.join(root, 'versions', version);
if (fs.existsSync(destination)) throw new Error(`Version already exists: ${version}`);
fs.mkdirSync(destination, { recursive: true });
fs.copyFileSync(path.join(root, 'EP01-manager.html'), path.join(destination, 'EP01-manager.html'));
fs.cpSync(path.join(root, 'assets'), path.join(destination, 'assets'), { recursive: true });
const html = fs.readFileSync(path.join(destination, 'EP01-manager.html'));
fs.writeFileSync(path.join(destination, 'version.json'), JSON.stringify({
  version, description, savedAt: new Date().toISOString(),
  sha256: crypto.createHash('sha256').update(html).digest('hex'),
  entry: 'EP01-manager.html'
}, null, 2) + '\n');
console.log(destination);
