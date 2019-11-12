"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product.controllers");
const router = express_1.Router();
router.route('/')
    .get(product_controllers_1.helloWorld);
exports.default = router;
//# sourceMappingURL=product.routes.js.map