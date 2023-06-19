import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const gzFile = join(__dirname, 'files', 'archive.gz');
  const txtFile = join(__dirname, 'files', 'fileToCompress.txt');

  const gunzip = createGunzip();
  const read = createReadStream(gzFile);
  const write = createWriteStream(txtFile);
  read.pipe(gunzip).pipe(write);
};

await decompress();
