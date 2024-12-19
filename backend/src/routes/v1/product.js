import express from 'express'
import { createProduct, deleteProductById, getAllProducts, getProductsById, mailContact, updateProductById, whatshapContact } from '../../controllers/productController.js'
// import { upload } from '../../config/multerConfig.js'

const router = express.Router()

router.get("/", getAllProducts)
router.get("/:id", getProductsById)
router.post("/", createProduct) // Allows up to 4 images
router.patch("/:id", updateProductById)
router.delete("/:id", deleteProductById)
router.post("/send-mail", mailContact)
router.get("/whatsapp", whatshapContact)

export default router;