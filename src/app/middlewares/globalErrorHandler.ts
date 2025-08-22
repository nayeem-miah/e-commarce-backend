import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {


    console.log(err);
    res.status(500).json({
        success: false,
        message: "something is wrong",
        err: err
    })
}