import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
  street: { type: String, required: true },
  streetNumber: { type: Number, required: true },
  postcode: { type: Number, required: true },
  city: { type: String, required: false },
});

const locationSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  tags: { type: [String], required: false },
  rating: { type: Number, required: false },
  address: [addressSchema],
  image: { type: String, required: false },
  category: { type: String, required: false },
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
