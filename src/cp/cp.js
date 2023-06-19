import { dirname, join } from 'node:path';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const file = join(__dirname, 'files', 'script.js');

  //implementation option 1
  fork(file, args);

  //or implementation option 2
  // const child = fork(file, args, { silent: true });
  // process.stdin.pipe(child.stdin);
  // child.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
