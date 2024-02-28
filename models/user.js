import mongoose, { Schema, InferSchemaType } from "mongoose";

// Login Schema
const userCredentialSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter your username."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your personal Email."],
    unique: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Please enter your password."],
  },
  userType: {
    type: String,
    required: [true, "Please enter user type."],
  },
  orders: [{}],
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  personalNumber: {
    type: String,
    required: [true, "Please enter your personal number"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  birthday: {
    type: Date,
    required: [true, "Please enter your Birthday"],
  },
});

const orderSchema = new Schema({
  food:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Food"
  },
  quantity:{ type: Number,
  default: 1
}
})
export const UserCredentials = mongoose.model(
  "UserCredentials",
  userCredentialSchema
);
export const Order = mongoose.model(
  "Order",
  orderSchema
);