import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';

const ERROR_MESSAGE = 'FS operation failed';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRemove = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(fileToRemove);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
