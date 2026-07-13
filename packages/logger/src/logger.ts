export class Logger {
  info(message: string) {
    console.log(`[INFO]`);
  }

  error(message: string) {
    console.log(`[ERROR] ${message}`);
  }

  warn(message: string) {
    console.log(`[WARN] ${message}`);
  }
}
