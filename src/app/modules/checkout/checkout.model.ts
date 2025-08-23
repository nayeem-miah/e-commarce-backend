import { model, Schema } from "mongoose";
import { IAddress, ICheckout } from "./checkout.interface";

const addressSchema = new Schema<IAddress>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: String
}, {
    _id: false,
    versionKey: false
})


const checkoutSchema = new Schema<ICheckout>({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    address: addressSchema,
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export const Checkout = model<ICheckout>("Checkout", checkoutSchema);