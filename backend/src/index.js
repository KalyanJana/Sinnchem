import express from "express";
import fileUpload from "express-fileupload";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import appRoutes from "./routes/appRoutes.js";
import cors from 'cors'

const app = express();

// config/cloudinaryConfig.js
import { v2 as cloudinary } from "cloudinary";

// Setup Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Use express-fileupload middleware
app.use(fileUpload({
  useTempFiles: true, // Use temporary files to handle uploads
  tempFileDir: "/tmp/", // Specify temp directory for uploads
}));
app.use(cors())

//input changes to requrie format
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // this is for json data
app.use("/uploads", express.static("uploads"));

//routes
app.use("/api", appRoutes);
app.get("/", (req, res) => {
  // return res.json({
  //     message: "get request"
  // })
  res.send("API working with /api/v1");
});
app.all("*", (req, res) => {
  return res.status(404).json({
    message: "Not found",
  });
});

//common middleware
app.use((req, res, next) => {
  console.log("--- Request Body ---");
  console.log(req.body);
  console.log("--- Request Files ---");
  console.log(req.files);
  next();
});

//server create
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  connectDB();
});
