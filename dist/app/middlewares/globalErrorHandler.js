"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    let message;
    let status = 500;
    let errorSources = [];
    if (err.name === "ZodError") {
        status = 401;
        message = "zod error";
        err.issues.forEach((issue) => {
            errorSources.push({
                path: issue.path[issue.path.length - 1],
                message: issue.message
            });
        });
    }
    else if (err instanceof Error) {
        message = err.message;
    }
    console.log(err);
    res.status(status).json({
        success: false,
        message: message,
        err: err,
        errorSources
    });
};
exports.globalErrorHandler = globalErrorHandler;
