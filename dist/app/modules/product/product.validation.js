"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
const product_interface_1 = require("./product.interface");
// --------------------
// Variant Schema
// --------------------
const productVariantSchema = zod_1.z.object({
    attributes: zod_1.z
        .record(zod_1.z.string(), zod_1.z.string())
        .refine((val) => Object.keys(val).length > 0, {
        message: "At least one attribute is required",
    }),
    price: zod_1.z.number().min(0, "Price must be a positive number"),
    inventory: zod_1.z.number().int().min(0, "Inventory cannot be negative"),
});
// --------------------
// Create Product Schema
// --------------------
exports.createProductSchema = zod_1.z.object({
    title: zod_1.z.string()
        .min(3, "Title must be at least 3 characters")
        .max(100),
    description: zod_1.z.string()
        .max(500, "Description can't exceed 500 characters")
        .optional(),
    category: zod_1.z.string().min(1, "Category is required"),
    image: zod_1.z.string().url("Invalid image URL"),
    status: zod_1.z.nativeEnum(product_interface_1.IStatus)
        .default(product_interface_1.IStatus.ACTIVE),
    variants: zod_1.z.array(productVariantSchema)
        .nonempty("At least one variant is required"),
});
// --------------------
// Update Product Schema (all optional)
// --------------------
exports.updateProductSchema = exports.createProductSchema.partial();
// --------------------
// Type Inference
// --------------------
