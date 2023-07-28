import { NextFunction, Request, Response } from "express";
import { IProduct, Product } from "./product.model"; // Assuming your model is in a separate file

// Controller function to get 6 random products
export const getRandomProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const randomProducts: IProduct[] = await Product.aggregate([
      { $sample: { size: 6 } }, // Get 6 random documents from the collection
    ]);

    res.status(200).json(randomProducts);
  } catch (error) {
    next(error);
  }
};
export const getProductsByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category } = req.params;

    const productsByCategory: IProduct[] = await Product.find({ category });

    if (productsByCategory.length === 0) {
      res
        .status(404)
        .json({ error: "No products found for the given category" });
    } else {
      res.status(200).json(productsByCategory);
    }
  } catch (error) {
    next(error);
  }
};
