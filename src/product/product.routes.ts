import express from "express";
import { getProductsByCategory, getRandomProducts } from "./product.controller";
const productRouter = express.Router();

productRouter.post("/", getRandomProducts);
productRouter.get("/get-products-by-category/:category", getProductsByCategory);

export default productRouter;
