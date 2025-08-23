"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const notFount_1 = require("./app/middlewares/notFount");
const route_1 = __importDefault(require("./app/routes/route"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api", route_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to e-commerce backend"
    });
});
// ! global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
// not fount page
app.use(notFount_1.notFount);
exports.default = app;
