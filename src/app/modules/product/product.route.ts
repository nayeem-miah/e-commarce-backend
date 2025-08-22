import { Router } from "express";
import { ProductController } from "./product.controller";
import { validationRequest } from "../../middlewares/validationRequest";
import { createProductSchema } from "./product.validation";

const router = Router();

router.post("/create",
    validationRequest(createProductSchema),
    ProductController.addProduct
)

export const ProductRouter = router;