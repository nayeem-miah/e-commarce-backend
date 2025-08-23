"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_route_1 = require("../modules/product/product.route");
const checkout_route_1 = require("../modules/checkout/checkout.route");
const router = (0, express_1.Router)();
const routerModules = [
    {
        path: "/product",
        route: product_route_1.ProductRouter
    },
    {
        path: "/checkout",
        route: checkout_route_1.CheckoutRoute
    },
];
routerModules.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
