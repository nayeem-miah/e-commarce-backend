import { NextFunction, Request, Response } from "express";

const crateOrder = async (req: Request, res: Response, next: NextFunction) => {

    try {



    } catch (error) {
        next(error)
    }
}


export const CheckoutController = {
    crateOrder
}