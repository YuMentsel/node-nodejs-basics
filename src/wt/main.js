import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js');

const performCalculations = async () => {
  const workersPromises = cpus().map((_, i) => {
    return new Promise((res) => {
      const worker = new Worker(workerPath, { workerData: 10 + i });

      worker.on('message', (data) => res({ status: 'resolved', data }));
      worker.on('error', () => res({ status: 'error', data: null }));
    });
  });

  const data = await Promise.all(workersPromises);
  console.log(data);
};

await performCalculations();
