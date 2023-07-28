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
