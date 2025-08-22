import { Request, Response } from "express"

export const notFount = (req: Request, res: Response) => {

    res.status(404).json({
        success: false,
        message: "Route not fount"
    })
}