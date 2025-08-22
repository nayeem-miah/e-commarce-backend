import { Types } from "mongoose";

export enum IStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE"
}

export interface IProductVariants {
    attributes: Record<string, string>;
    price: number;
    inventory: number;
}


export interface IProduct {
    _id: Types.ObjectId;
    title: string;
    description?: string;
    category: string;
    image: string;
    status: IStatus;
    variants: IProductVariants[]
}