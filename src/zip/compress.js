import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const txtFile = join(__dirname, 'files', 'fileToCompress.txt');
  const gzFile = join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const read = createReadStream(txtFile);
  const write = createWriteStream(gzFile);
  read.pipe(gzip).pipe(write);
};

await compress();
