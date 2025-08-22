import { z } from "zod";
import { IStatus } from "./product.interface";

// --------------------
// Variant Schema
// --------------------
const productVariantSchema = z.object({
    attributes: z
        .record(z.string(), z.string())
        .refine((val) => Object.keys(val).length > 0, {
            message: "At least one attribute is required",
        }),

    price: z.number().min(0, "Price must be a positive number"),

    inventory: z.number().int().min(0, "Inventory cannot be negative"),
});

// --------------------
// Create Product Schema
// --------------------
export const createProductSchema = z.object({
    title: z.string()
        .min(3, "Title must be at least 3 characters")
        .max(100),

    description: z.string()
        .max(500, "Description can't exceed 500 characters")
        .optional(),

    category: z.string().min(1, "Category is required"),

    image: z.string().url("Invalid image URL"),

    status: z.nativeEnum(IStatus)
        .default(IStatus.ACTIVE),

    variants: z.array(productVariantSchema)
        .nonempty("At least one variant is required"),
});

// --------------------
// Update Product Schema (all optional)
// --------------------
export const updateProductSchema = createProductSchema.partial();

// --------------------
// Type Inference
// --------------------
