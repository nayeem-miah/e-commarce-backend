import { NextFunction, Request, Response } from "express";
import { Product } from "./product.model";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Product.create(req.body);
        console.log(result);


        res.status(201).json({
            success: true,
            message: "product create success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}



export const ProductController = {
    addProduct
}