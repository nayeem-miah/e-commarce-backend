import { NextFunction, Request, Response } from "express";
import { Checkout } from "./checkout.model";

const crateOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await Checkout.create(req.body);

        const updatePrice = {
            totalPrice: result.quantity * result.totalPrice
        }

        const updateResult = await Checkout.findByIdAndUpdate(
            result._id,
            updatePrice,
            { new: true, runValidators: true }
        )
        console.log(updateResult);
        res.status(201).json({
            success: true,
            message: "product order success",
            data: updateResult
        })
    } catch (error) {
        next(error)
    }
}

const allOrders = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await Checkout.find().populate("product")

        res.status(200).json({
            success: true,
            message: "all product order success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


export const CheckoutController = {
    crateOrder,
    allOrders
}