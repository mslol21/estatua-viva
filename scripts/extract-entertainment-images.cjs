// Unpacks only the approved entertainment images from the committed ZIP.
// Runs before both Next.js development and production builds.
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const root = path.resolve(__dirname, '..');
const archive = path.join(root, 'public', 'imagens_entretenimento_estatua_viva.zip');
const destination = path.join(root, 'public');
const expected = new Set([
  'images/entretenimento/mimicos-interacao-eventos.webp',
  'images/entretenimento/personagem-pirata-eventos.webp',
  'images/entretenimento/performance-artistica-fogo.webp',
  'images/entretenimento/estatuas-vivas-esculturas-eventos.webp',
  'images/entretenimento/estatua-viva-prateada-performance.webp',
]);

if (!fs.existsSync(archive)) {
  console.error('Missing entertainment ZIP:', archive);
  process.exit(1);
}

const zip = fs.readFileSync(archive);
let eocd = -1;
for (let i = zip.length - 22; i >= Math.max(0, zip.length - 65557); i--) {
  if (zip.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
}
if (eocd === -1) throw new Error('Invalid ZIP: end of central directory not found');
const total = zip.readUInt16LE(eocd + 10);
let offset = zip.readUInt32LE(eocd + 16);
const extracted = new Set();
for (let n = 0; n < total; n++) {
  if (zip.readUInt32LE(offset) !== 0x02014b50) throw new Error('Invalid ZIP central directory entry');
  const method = zip.readUInt16LE(offset + 10);
  const compressedSize = zip.readUInt32LE(offset + 20);
  const uncompressedSize = zip.readUInt32LE(offset + 24);
  const nameLength = zip.readUInt16LE(offset + 28);
  const extraLength = zip.readUInt16LE(offset + 30);
  const commentLength = zip.readUInt16LE(offset + 32);
  const localOffset = zip.readUInt32LE(offset + 42);
  const name = zip.subarray(offset + 46, offset + 46 + nameLength).toString('utf8');
  offset += 46 + nameLength + extraLength + commentLength;
  if (!expected.has(name)) continue;
  if (method !== 8 && method !== 0) throw new Error('Unsupported ZIP compression for ' + name);
  if (zip.readUInt32LE(localOffset) !== 0x04034b50) throw new Error('Invalid ZIP file entry: ' + name);
  const start = localOffset + 30 + zip.readUInt16LE(localOffset + 26) + zip.readUInt16LE(localOffset + 28);
  const compressed = zip.subarray(start, start + compressedSize);
  const image = method === 8 ? zlib.inflateRawSync(compressed) : compressed;
  if (image.length !== uncompressedSize || image.length > 8_000_000) throw new Error('Invalid image size: ' + name);
  const output = path.join(destination, name);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, image);
  extracted.add(name);
}
for (const name of expected) if (!extracted.has(name)) throw new Error('Missing required image in ZIP: ' + name);
console.log('Entertainment image assets ready:', extracted.size);
