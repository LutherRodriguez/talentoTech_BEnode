import * as productService from "../services/products.services.js";

// Controladores para manejar las solicitudes relacionadas con productos
export const getAllProducts = (req, res) => {
  const products = productService.getAllProducts(req.query); // Pasar los filtros de la query a la función getAllProducts
  res.status(200).json(products);
};

// Controlador para obtener las categorías de productos
export const getCategories = (req, res) => {
  const categories = productService.getCategories();

  res.status(200).json({
    total: categories.length,
    categories,
  });
};

// Controlador para obtener un producto por su ID
export const getProductById = (req, res) => {
  const product = productService.getProductById(req.params.id); // Pasar el id de la query a la función getProductById

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(product);
};

// Controlador para crear un nuevo producto
export const createProduct = (req, res) => {
  const { title, price, category } = req.body;

  if (!title || !price || !category) {
    return res
      .status(400)
      .json({ error: "title, price, y category son requeridos" });
  }

  if (Number.isNaN(Number(price))) {
    return res.status(400).json({ error: 'price debe ser un número' });
  }

  if (typeof category !== 'string') {
    return res.status(400).json({ error: 'category debe ser una cadena de texto' });
  }

  const newProduct = productService.createProduct({
    title,
    price,
    category,
  });
  res.status(201).json(newProduct);
};
