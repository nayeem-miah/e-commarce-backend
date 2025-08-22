import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodRawShape } from "zod";

type anyZodObject = ZodObject<ZodRawShape>;

export const validationRequest = (zodSchema: anyZodObject) => async (req: Request, res: Response, next: NextFunction) => {

    try {
        req.body = await zodSchema.parseAsync(req.body);
        next()
    } catch (error) {
        next(error)
    }

}