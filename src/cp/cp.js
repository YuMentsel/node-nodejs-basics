import { dirname, join } from 'node:path';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const file = join(__dirname, 'files', 'script.js');
  fork(file, args);
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
