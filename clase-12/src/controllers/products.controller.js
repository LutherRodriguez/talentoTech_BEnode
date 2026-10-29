import * as productsService from '../services/products.service.js';

export const getAllProducts = (req, res) => {
  const products = productsService.getAllProducts(req.query);
  res.status(200).json(products);
};

export const getProductById = (req, res) => {
  const product = productsService.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.status(200).json(product);
};

export const createProduct = (req, res) => {
  // En Express 5, si no llega body, req.body es undefined
  const { title, price, category } = req.body ?? {};

  if (!title || !price || !category) {
    return res.status(400).json({ message: 'title, price y category son obligatorios' });
  }

  const newProduct = productsService.createProduct({ title, price, category });
  res.status(201).json(newProduct);
};
