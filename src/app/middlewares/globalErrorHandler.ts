import { NextFunction, Request, Response } from "express";




export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let message
    let status = 500;
    let errorSources: any = [];

    if (err.name === "ZodError") {
        status = 401
        message = "zod error"
        err.issues.forEach((issue: any) => {
            errorSources.push({
                path: issue.path[issue.path.length - 1],
                message: issue.message
            })
        })
    }

    else if (err instanceof Error) {
        message = err.message
    }

    console.log(err);
    res.status(status).json({
        success: false,
        message: message,
        err: err,
        errorSources
    })
}