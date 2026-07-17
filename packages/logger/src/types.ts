import { Logger } from "winston";

export interface LoggerOptions {
  serviceName: string;
  level?: string;
  environment?: string;
}

export type AppLogger = Logger;
