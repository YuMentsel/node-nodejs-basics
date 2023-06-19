import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const file = join(__dirname, 'files', 'fileToRead.txt');
  createReadStream(file).pipe(process.stdout);
};

await read();
