import type{ ConnectOptions}  from "mongoose";

export interface DatabaseConfig {
  uri: string;
  options?: ConnectOptions;
}