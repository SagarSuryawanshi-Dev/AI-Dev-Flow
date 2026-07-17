export const LOG_LEVELS = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  HTTP: "http",
  VERBOSE: "verbose",
  DEBUG: "debug",
  SILLY: "silly",
} as const;

export const DEFAULT_LOG_LEVEL = "info";

export const DEFAULT_SERVICE_NAME = "unknown-service";
