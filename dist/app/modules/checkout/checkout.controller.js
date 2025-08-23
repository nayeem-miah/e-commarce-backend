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
exports.CheckoutController = void 0;
const checkout_model_1 = require("./checkout.model");
const crateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield checkout_model_1.Checkout.create(req.body);
        const updatePrice = {
            totalPrice: result.quantity * result.totalPrice
        };
        const updateResult = yield checkout_model_1.Checkout.findByIdAndUpdate(result._id, updatePrice, { new: true, runValidators: true });
        res.status(201).json({
            success: true,
            message: "product order success",
            data: updateResult
        });
    }
    catch (error) {
        next(error);
    }
});
const allOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield checkout_model_1.Checkout.find().populate("product");
        res.status(200).json({
            success: true,
            message: "all product order success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const order = yield checkout_model_1.Checkout.findById(id);
        if (!order) {
            throw new Error("orders not found");
        }
        const updateDoc = Object.assign(Object.assign({}, req.body), { totalPrice: order.totalPrice * updatedData.quantity });
        const result = yield checkout_model_1.Checkout.findByIdAndUpdate(id, updateDoc, { new: true, runValidators: true });
        res.status(200).json({
            success: true,
            message: " product order update success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield checkout_model_1.Checkout.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: " product order delete success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CheckoutController = {
    crateOrder,
    allOrders,
    updateOrder,
    deleteOrders
};
