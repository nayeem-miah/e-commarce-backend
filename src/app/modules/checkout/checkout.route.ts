import { Router } from "express";
import { validationRequest } from "../../middlewares/validationRequest";
import { checkoutZodSchema } from "./checkout.validation";
import { CheckoutController } from "./checkout.controller";

const router = Router();

router.post("/",
    validationRequest(checkoutZodSchema),
    CheckoutController.crateOrder
)




export const CheckoutRoute = router;