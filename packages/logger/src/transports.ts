import winston from "winston";
import { developmentFormat, productionFormat } from "./format";

export function createTransports() {
  const isProduction = process.env.NODE_ENV === "production";

  return [
    new winston.transports.Console({
      format: isProduction ? productionFormat : developmentFormat,
    }),
  ];
}
