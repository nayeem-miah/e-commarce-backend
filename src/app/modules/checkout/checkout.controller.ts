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


const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const order = await Checkout.findById(id);

        if (!order) {
            throw new Error("orders not found")
        }

        const updateDoc = {
            ...req.body,
            totalPrice: order.totalPrice * updatedData.quantity
        }

        const result = await Checkout.findByIdAndUpdate(
            id,
            updateDoc,
            { new: true, runValidators: true }
        )

        res.status(200).json({
            success: true,
            message: " product order update success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const deleteOrders = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;


    try {

        const result = await Checkout.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: " product order delete success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


export const CheckoutController = {
    crateOrder,
    allOrders,
    updateOrder,
    deleteOrders
}