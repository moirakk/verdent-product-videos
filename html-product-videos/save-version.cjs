const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const [version, description, entry = 'EP01-manager.html'] = process.argv.slice(2);
if (!/^v\d{3}$/.test(version || '') || !description || !/^EP\d{2}-[a-z-]+\.html$/.test(entry)) {
  throw new Error('Usage: node save-version.cjs v001 "Description" [EP02-create-app.html]');
}
const root = __dirname;
const episode = entry.slice(0, 4);
const destination = episode === 'EP01' ? path.join(root, 'versions', version) : path.join(root, 'versions', episode, version);
if (fs.existsSync(destination)) throw new Error(`Version already exists: ${version}`);
fs.mkdirSync(destination, { recursive: true });
fs.copyFileSync(path.join(root, entry), path.join(destination, entry));
fs.cpSync(path.join(root, 'assets'), path.join(destination, 'assets'), { recursive: true });
const html = fs.readFileSync(path.join(destination, entry));
fs.writeFileSync(path.join(destination, 'version.json'), JSON.stringify({
  version, description, savedAt: new Date().toISOString(),
  sha256: crypto.createHash('sha256').update(html).digest('hex'),
  entry
}, null, 2) + '\n');
console.log(destination);
