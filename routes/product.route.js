import express, { response } from 'express'
import Product from '../models/product.model.js';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';

export const router = express.Router();

router.get('/', getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)