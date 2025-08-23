"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const product_interface_1 = require("./product.interface");
const ProductVariantSchema = new mongoose_1.Schema({
    attributes: {
        type: Map,
        of: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    inventory: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    _id: false,
    versionKey: false
});
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: Object.values(product_interface_1.IStatus),
        required: true,
        default: product_interface_1.IStatus.ACTIVE
    },
    variants: {
        type: [ProductVariantSchema],
        validate: [
            (val) => val.length > 0,
            "At least 1 variant required",
        ],
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)("Product", productSchema);
