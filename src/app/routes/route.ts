import { Router } from "express";
import { ProductRouter } from "../modules/product/product.route";

const router = Router();

const routerModules = [
    {
        path: "/product",
        route: ProductRouter
    }
]

routerModules.forEach((route) => {
    router.use(route.path, route.route)
})






export default router;