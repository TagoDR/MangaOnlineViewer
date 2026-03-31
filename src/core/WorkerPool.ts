import type { LoadSpeed } from '../types';

type Task = () => Promise<void>;

export class WorkerPool {
  private queue: Task[] = [];
  private activeCount = 0;
  private lastRunTime = 0;
  private maxConcurrency: number;
  private minDelay: number;

  constructor(speed: LoadSpeed, customDelay?: number) {
    const config = {
      Safe: { concurrency: 5, delay: 1000 },
      Standard: { concurrency: 5, delay: 500 },
      Faster: { concurrency: 10, delay: 500 },
      Extreme: { concurrency: 10, delay: 250 },
      All: { concurrency: 20, delay: 50 },
    }[speed];
    this.maxConcurrency = config.concurrency;
    this.minDelay = customDelay ?? config.delay;
  }

  add(task: Task) {
    this.queue.push(task);
    this.runNext();
  }

  private async runNext() {
    if (this.activeCount >= this.maxConcurrency || this.queue.length === 0) {
      return;
    }

    const now = Date.now();
    const timeSinceLastRun = now - this.lastRunTime;
    if (timeSinceLastRun < this.minDelay) {
      setTimeout(() => this.runNext(), this.minDelay - timeSinceLastRun);
      return;
    }

    const task = this.queue.shift();
    if (task) {
      this.activeCount += 1;
      this.lastRunTime = Date.now();
      try {
        await task();
      } finally {
        this.activeCount -= 1;
        this.runNext();
      }
    }
  }
}
