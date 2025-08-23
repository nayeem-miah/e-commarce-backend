"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCheckoutZodSchema = exports.checkoutZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const addressZodSchema = zod_1.default.object({
    name: zod_1.default.string().min(2, "Name is too short"),
    phone: zod_1.default.string().min(11, "Phone must be at least 11 chars"),
    city: zod_1.default.string().min(3, "City is too short")
});
exports.checkoutZodSchema = zod_1.default.object({
    product: zod_1.default.string(),
    address: addressZodSchema,
    quantity: zod_1.default
        .number({ message: "Quantity is required" })
        .int("Quantity must be an integer")
        .positive("Quantity must be > 0"),
    totalPrice: zod_1.default
        .number({ message: "Total price is required" })
        .nonnegative("Total price cannot be negative"),
});
exports.updateCheckoutZodSchema = exports.checkoutZodSchema.partial();
