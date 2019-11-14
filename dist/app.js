"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 3000);
// Routes
app.use('/api', product_routes_1.default);
// Middelwares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
exports.default = app;
//# sourceMappingURL=app.js.map