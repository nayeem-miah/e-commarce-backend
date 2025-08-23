import { Types } from "mongoose";

interface IAddress {
    name: string;
    phone: string;
    city: string;
}


export interface ICheckout {
    product: Types.ObjectId,
    address: IAddress,
    quantity: number;
    totalPrice: number;
}