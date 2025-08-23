"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("./product.model");
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "product create success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.aggregate([
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
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = yield product_model_1.Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        res.status(201).json({
            success: true,
            message: "product updated success success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield product_model_1.Product.findByIdAndDelete(id);
        res.status(201).json({
            success: true,
            message: "product delete success success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ProductController = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
};
