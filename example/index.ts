import { Worker } from 'worker_threads';
import TSWorker from 'ts-worker';
const worker: Worker = TSWorker('worker.ts', {
  workerData: {
    value: 15
  }
});

worker.on('message', res => {
  console.log(res);
});
