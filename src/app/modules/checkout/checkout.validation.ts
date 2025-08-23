import z from "zod";

const addressZodSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    phone: z.string().min(11, "Phone must be at least 11 chars"),
    city: z.string().min(3, "City is too short")
});


export const checkoutZodSchema = z.object({
    product: z.string(),

    address: addressZodSchema,

    quantity: z
        .number({ message: "Quantity is required" })
        .int("Quantity must be an integer")
        .positive("Quantity must be > 0"),

    totalPrice: z
        .number({ message: "Total price is required" })
        .nonnegative("Total price cannot be negative"),

})