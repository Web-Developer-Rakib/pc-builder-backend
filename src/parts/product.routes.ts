import express from "express";
import { getRandomProducts } from "./product.controller";
const productRouter = express.Router();

productRouter.post("/", getRandomProducts);
// productRouter.get("/", getAllBooks);
// productRouter.get("/:bookId", getSingleBook);
// productRouter.put("/:bookId", updateBook);
// productRouter.delete("/:bookId", deleteBook);

export default productRouter;
