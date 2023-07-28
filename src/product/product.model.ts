import mongoose, { Document, Schema } from "mongoose";

enum ProductStatus {
  InStock = "In Stock",
  OutOfStock = "Out of Stock",
}

interface IReview {
  userName: string;
  rating: number;
  reviewText: string;
}

interface IProduct extends Document {
  image: string;
  productName: string;
  category: string;
  status: ProductStatus;
  price: number;
  description: string;
  keyFeatures: {
    brand: string;
    model: string;
    specification: string;
    port: string;
    type: string;
    resolution: string;
    voltage: string;
    [key: string]: string;
  };
  individualRating: number;
  averageRating: number;
  reviews: IReview[];
}

const productSchema: Schema<IProduct> = new Schema({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(ProductStatus),
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyFeatures: {
    type: Map,
    of: String,
    required: true,
  },
  individualRating: {
    type: Number,
    required: true,
    default: 0,
  },
  averageRating: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews: [
    {
      userName: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      reviewText: {
        type: String,
        required: true,
      },
    },
  ],
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export { IProduct, Product };
