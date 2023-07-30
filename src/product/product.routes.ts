import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
  getRandomProducts,
  getSingleProduct,
} from "./product.controller";
const productRouter = express.Router();

productRouter.get("/all", getAllProducts);
productRouter.get("/random", getRandomProducts);
productRouter.get("/get-products-by-category/:category", getProductsByCategory);
productRouter.get("/single/:productId", getSingleProduct);

export default productRouter;
