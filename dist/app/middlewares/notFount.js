"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFount = void 0;
const notFount = (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not fount"
    });
};
exports.notFount = notFount;
