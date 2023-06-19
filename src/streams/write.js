import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const file = join(__dirname, 'files', 'fileToWrite.txt');
  process.stdin.pipe(createWriteStream(file, { flags: 'a' }));
};

await write();
