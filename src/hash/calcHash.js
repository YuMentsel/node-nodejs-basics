import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const file = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const buffer = await readFile(file);
  const hash = createHash('sha256').update(buffer).digest('hex');
  console.log(hash);
};

await calculateHash();
