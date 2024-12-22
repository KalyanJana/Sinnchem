import transporter from "../config/mailConfig.js";
import Product from "../schema/product.js";
import cloudinary from "cloudinary";

// GET all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      products,
      message: "Fetch products successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET product by ID
export const getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create Product Controller
export const createProduct = async (req, res) => {
  try {
    const { name, category, price, unit, minimumQuantity, description } = req.body;

    let { specification, additionalInformation } = req.body;

    // Parse description if it is sent as a JSON string
    if (typeof specification === "string") {
      specification = JSON.parse(specification); 
    }

    if (typeof additionalInformation === "string") {
      additionalInformation = JSON.parse(additionalInformation); 
    }

    // Check if images are present
    if (!req.files || !req.files.images) {
      return res
        .status(400)
        .json({ message: "At least one image is required." });
    }

    // Check if images is an array (multiple files) or single file
    const imageFiles = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];

    // Limit to a maximum of 4 images
    if (imageFiles.length > 4) {
      return res
        .status(400)
        .json({ message: "You can upload a maximum of 4 images." });
    }

    // Upload each image to Cloudinary
    const imageUrls = [];
    for (const file of imageFiles) {
      const uploadedImage = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "sinnchem",
        }
      );
      imageUrls.push(uploadedImage.secure_url); // Collect image URLs
    }

    const newProduct = new Product({
      name,
      category,
      price,
      unit, 
      minimumQuantity,
      specification,
      description,
      additionalInformation,
      images: imageUrls, 
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully!",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res
      .status(500)
      .json({ message: "Failed to create product", error: error.message });
  }
};

// UPDATE product by ID (with image upload)
export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const images = [];

    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        images.push(file.path); // Save the Cloudinary URL
      });
    }

    if (images.length > 0) {
      updates.image = images; // Update the images if new ones are provided
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const mailContact = async (req, res) => {
  try {
    const { subject, text } = req.body;

    // Generate the email body dynamically
    const formattedText = `
Hi,

Please find the details below:

${Object.entries(text)
  .map(([key, value]) => `${capitalizeFirstLetter(key)}: ${value}`)
  .join("\n")}

Regards,
Sinnchem Website Query
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || "New Sinnchem Website Query",
      text: formattedText,
    });

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Error sending email",
      error: error.message,
    });
  }
};

// Helper function to capitalize the first letter of keys
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, " ");
};

// 3. WhatsApp Redirection
export const whatshapContact = async (req, res) => {
  try {
    console.log("Whatshap end point hitted");
    const phone = "9733241500"; // Fixed phone number
    const text = "Hello, I want to chat with you!"; // Default message

    // Construct WhatsApp deep link
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
      text
    )}`;

    res.status(200).json({
      message: "Redirect to WhatsApp",
      link: whatsappLink,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error constructing WhatsApp link",
      error: error.message,
    });
  }
};

