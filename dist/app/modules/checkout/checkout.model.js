"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
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
});
const checkoutSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.Checkout = (0, mongoose_1.model)("Checkout", checkoutSchema);
