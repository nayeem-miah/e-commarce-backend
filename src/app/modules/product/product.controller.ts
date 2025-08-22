import { NextFunction, Request, Response } from "express";
import { Product } from "./product.model";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Product.create(req.body);

        res.status(201).json({
            success: true,
            message: "product create success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Product.find();

        res.status(201).json({
            success: true,
            message: "all product received success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const updateData = req.body;

        const result = await Product.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        res.status(201).json({
            success: true,
            message: "product updated success success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}



export const ProductController = {
    addProduct,
    getProducts,
    updateProduct
}