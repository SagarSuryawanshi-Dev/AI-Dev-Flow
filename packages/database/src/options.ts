import type { ConnectOptions } from "mongoose";

export const DEFAULT_CONNECTION_OPTIONS = {
  maxPoolSize: 10,
  minPoolSize: 2,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
} as ConnectOptions;