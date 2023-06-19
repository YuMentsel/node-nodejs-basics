import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const ERROR_MESSAGE = 'FS operation failed';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRead = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileContent = await readFile(fileToRead, { encoding: 'utf-8' });
    console.log(fileContent);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
