import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },

  imgUrl: {
    type: String,
    required: true,
  },
});

const Product = model("Product", schema);

export default Product;
