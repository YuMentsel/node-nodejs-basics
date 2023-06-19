import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';

const FILE_CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, FILE_CONTENT, { flag: 'wx' });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
