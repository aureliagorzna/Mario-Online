"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use("/game", express_1.default.static("game"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(process.env.PORT || 5000);
