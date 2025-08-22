import { Router } from "express";
import { ProductController } from "./product.controller";
import { validationRequest } from "../../middlewares/validationRequest";
import { createProductSchema, updateProductSchema } from "./product.validation";

const router = Router();

router.post("/create",
    validationRequest(createProductSchema),
    ProductController.addProduct
);

router.get("/", ProductController.getProducts);

router.patch("/:id",
    validationRequest(updateProductSchema),
    ProductController.updateProduct
)

export const ProductRouter = router;