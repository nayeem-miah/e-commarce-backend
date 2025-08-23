import { Router } from "express";
import { ProductRouter } from "../modules/product/product.route";
import { CheckoutRoute } from "../modules/checkout/checkout.route";

const router = Router();

const routerModules = [
    {
        path: "/product",
        route: ProductRouter
    },
    {
        path: "/checkout",
        route: CheckoutRoute
    },
]

routerModules.forEach((route) => {
    router.use(route.path, route.route)
})






export default router;