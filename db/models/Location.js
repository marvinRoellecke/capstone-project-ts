import mongoose from "mongoose";

const { Schema } = mongoose;

const infoSchema = new Schema({
  sport: { type: String, required: true },
  numberOfCourts: { type: Number, required: false },
  surface: { type: String, required: false },
});

const locationSchema = new Schema({
  title: { type: String, required: true },
  info: [infoSchema],
  address: {
    street: { type: String, required: true },
    houseNumber: { type: Number, required: true },
    postcode: { type: Number, required: true },
    city: { type: String, required: true },
  },
  latitude: { type: String, required: false },
  longitude: { type: String, required: false },
  image: { type: String, required: false },
  infrastructure: {
    lighting: { type: Boolean, required: false },
    wheelchair: { type: Boolean, required: false },
  },
  outdoor: { type: String, required: false },
  public: { type: String, required: false },
  rating: { type: Number, required: false },
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
