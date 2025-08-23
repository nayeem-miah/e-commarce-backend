import { Router } from "express";
import { validationRequest } from "../../middlewares/validationRequest";
import { checkoutZodSchema, updateCheckoutZodSchema } from "./checkout.validation";
import { CheckoutController } from "./checkout.controller";

const router = Router();

router.post("/",
    validationRequest(checkoutZodSchema),
    CheckoutController.crateOrder
);

router.get("/", CheckoutController.allOrders);

router.patch("/:id",
    validationRequest(updateCheckoutZodSchema),
    CheckoutController.updateOrder
)



export const CheckoutRoute = router;