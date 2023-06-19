import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const ERROR_MESSAGE = 'FS operation failed';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesDir = join(__dirname, 'files');

const list = async () => {
  try {
    const files = await readdir(filesDir);
    console.log(files);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
