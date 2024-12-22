import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: false,
    trim: true,
  },
  unit: {
    type: String,
    requried: false,
    trim: true
  },
  minimumQuantity: {
    type: Number,
    required: false, 
  },
  specification: {
    type: Map, // Use Map for key-value pairs
    of: String, // Values will be strings
    required: true, // Ensure the description field is required
  },
  description: {
    type: String,
    required: true, 
  },
  additionalInformation: {
    type: Map, // Use Map for key-value pairs
    of: String, // Values will be strings
    required: false, // Ensure the description field is required
  },
  images: {
    type: [String], // Array of strings (URLs or paths to images)
    validate: {
      validator: function (arr) {
        // Ensure at least one image and max length of 4
        return arr.length > 0 && arr.length <= 4;
      },
      message: "You must provide at least 1 image and a maximum of 4 images.",
    },
    required: true, // Ensure the array itself is required
  },
});

// Export the Product model
const Product = mongoose.model("Product", productSchema);
export default Product;
