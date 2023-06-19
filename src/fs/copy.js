import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { isExisting } from '../utils/fsUtils.js';

const ERROR_MESSAGE = 'FS operation failed';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dirOrigin = join(__dirname, 'files');
const dirCopy = join(__dirname, 'files-copy');

const copy = async () => {
  const isError = await isExisting(dirCopy);
  if (isError) throw new Error(ERROR_MESSAGE);

  try {
    await mkdir(dirCopy);
    const files = await readdir(dirOrigin);
    files.map((file) => copyFile(join(dirOrigin, file), join(dirCopy, file)));
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
