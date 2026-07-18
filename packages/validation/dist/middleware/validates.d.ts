import type { ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";
export declare function validate(schema: ZodSchema): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validates.d.ts.map