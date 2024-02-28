import mongoose, { Schema, InferSchemaType } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter the food name."],
  },
  price: {
    type: String,
    required: [true, "Please enter the food price."],
  },
  rating: {
    type: String,
    required: [true, "Please enter the food rating."],
  },
  image: {
    type: String,
    required: [true, "Please enter an image."]
  }
});

export const Food = mongoose.model(
    "Food",
    foodSchema
  );