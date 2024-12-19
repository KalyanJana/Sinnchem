import transporter from "../config/mailConfig.js";
import Product from "../schema/product.js";
import cloudinary from "cloudinary";
import stringify from "json-stringify-pretty-compact";

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

// // CREATE a new product (with image upload)
// export const createProduct = async (req, res) => {
//   try {
//     const { name, category, price, details } = req.body;
//     const images = [];

//     if (req.files && req.files.length > 0) {
//       req.files.forEach((file) => {
//         images.push(file.path); // Save the Cloudinary URL
//       });
//     }

//     const newProduct = new Product({
//       name,
//       category,
//       price,
//       details: JSON.parse(details), // Assuming `details` is sent as JSON string
//       image: images,
//     });

//     console.log("Products ", newProduct)

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Create Product Controller
export const createProduct = async (req, res) => {
  try {
    // Retrieve product data from the request body
    const { name, category, price, minimumQuantity, description } = req.body;

    let { specification, additionalInformation } = req.body; // from body to convert to object

    // Parse description if it is sent as a JSON string
    if (typeof specification === "string") {
      specification = JSON.parse(specification); // Convert to object
    }
    // Parse description if it is sent as a JSON string
    if (typeof additionalInformation === "string") {
      additionalInformation = JSON.parse(additionalInformation); // Convert to object
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

    // Create a new product object
    const newProduct = new Product({
      name,
      category,
      price,
      minimumQuantity,
      specification,
      description,
      additionalInformation,
      images: imageUrls, // Save array of image URLs
    });

    // Save the product to the database
    await newProduct.save();

    // Send a success response
    res.status(201).json({
      message: "Product created successfully",
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

// DELETE product by ID
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

//send mail
// export const mailContact = async(req, res)=>{
//   try {
//     const { name, email, message } = req.body;

//     const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}.`;

//     await sendMail(userMessage);

//     return res.status(200).json({
//       success: true,
//       message: "Message Sent Successfully",
//     });
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

// 1. Send Email
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
Website Query
`;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || "New Website Query",
      text: formattedText,
    });

    res.status(200).json({
      message: "Email sent successfully",
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

// // 2. Send SMS
// router.post("/send-sms", async (req, res) => {
//   try {
//     const { to, message } = req.body;

//     // Send SMS via Twilio
//     const response = await twilioClient.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to,
//     });

//     res.status(200).json({
//       message: "SMS sent successfully",
//       data: response,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error sending SMS",
//       error: error.message,
//     });
//   }
// });

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

// export default router;
