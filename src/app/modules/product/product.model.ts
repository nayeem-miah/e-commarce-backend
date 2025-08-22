import { model, Schema } from "mongoose";
import { IProduct, IProductVariants, IStatus } from "./product.interface";


const ProductVariantSchema = new Schema<IProductVariants>({
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
},
    {
        _id: false,
        versionKey: false
    })

const productSchema = new Schema<IProduct>({
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
        enum: Object.values(IStatus),
        required: true,
        default: IStatus.ACTIVE
    },

    variants: {
        type: [ProductVariantSchema],
        validate: [
            (val: IProductVariants[]) => val.length > 0,
            "At least 1 variant required",
        ],
    },

    image: {
        type: String,
        required: true,
        trim: true
    },

},
    { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);