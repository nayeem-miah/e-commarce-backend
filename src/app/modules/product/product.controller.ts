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

        const products = await Product.aggregate([
            {
                $addFields: {
                    variantSummary: {
                        lowestPrice: { $min: "$variants.price" },
                        highestPrice: { $max: "$variants.price" },
                        totalInventory: { $sum: "$variants.inventory" },
                        variantCount: { $size: "$variants" }
                    }
                }
            },
        ]);


        res.status(201).json({
            success: true,
            message: "all product received success",
            data: products
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

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id

        const result = await Product.findByIdAndDelete(id);

        res.status(201).json({
            success: true,
            message: "product delete success success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}



export const ProductController = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
}