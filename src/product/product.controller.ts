import { NextFunction, Request, Response } from "express";
import { IProduct, Product } from "./product.model"; // Assuming your model is in a separate file

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
// Controller function to get 6 random products
export const getRandomProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const randomProducts: IProduct[] = await Product.aggregate([
      { $sample: { size: 6 } },
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
export const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { productId } = req.params;

    const product = await Product.find({ _id: productId });

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error);
  }
};
