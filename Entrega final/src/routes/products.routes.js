import express from "express";
import {
  getAllProducts,
  getProductById,
  getCategories,
  createProduct,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/categories", getCategories);
router.post("/products", createProduct);

export default router;
