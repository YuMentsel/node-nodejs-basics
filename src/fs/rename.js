import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rename as renameFile } from 'node:fs/promises';
import { isExisting } from '../utils/fsUtils.js';

const ERROR_MESSAGE = 'FS operation failed';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filename = join(__dirname, 'files', 'wrongFilename.txt');
const newFilename = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  const isError = await isExisting(newFilename);
  if (isError) throw new Error(ERROR_MESSAGE);

  try {
    await renameFile(filename, newFilename);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
