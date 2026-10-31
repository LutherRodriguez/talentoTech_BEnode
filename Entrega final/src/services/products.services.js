const products = [
  {
    id: 1,
    title: "Remera Rex",
    price: 1000,
    category: "remeras",
    categoryType: 1,
  },
  {
    id: 2,
    title: "Pantalón Rex",
    price: 2000,
    category: "pantalones",
    categoryType: 2,
  },
  {
    id: 3,
    title: "Zapatillas Rex",
    price: 3000,
    category: "zapatillas",
    categoryType: 3,
  },
  {
    id: 4,
    title: "Remera Rex",
    price: 1000,
    category: "remeras",
    categoryType: 1,
  },
  {
    id: 5,
    title: "Pantalón Rex",
    price: 2000,
    category: "pantalones",
    categoryType: 2,
  },
  {
    id: 6,
    title: "Zapatillas Rex",
    price: 3000,
    category: "zapatillas",
    categoryType: 3,
  },
];

// getAllProducts con filtros opcionales de categoría y precio máximo
export const getAllProducts = ({ category, maxPrice, categoryType } = {}) => {
  let filteredProducts = products;

  if (category) {
    // Si se proporciona un filtro de categoría, filtrar los productos por esa categoría
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }

  if (maxPrice) {
    // Si se proporciona un filtro de precio máximo, filtrar los productos por ese precio
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number(maxPrice),
    );
  }
    if (categoryType) {
      // Si se proporciona un filtro de tipo de categoría, filtrar los productos por ese tipo
      filteredProducts = filteredProducts.filter(
        (product) => product.categoryType === Number(categoryType)
      );
    };

  return filteredProducts;
};

// getCategories devuelve un array de objetos con la cantidad de productos por cada categoryType
export const getCategories = () => {
  const groups = new Map();

  products.forEach(({ category, categoryType }) => {
    // Si es la primera vez que vemos este categoryType, creamos su grupo
    if (!groups.has(categoryType)) {
      groups.set(categoryType, { categoryType, category, totalProducts: 0 });
    }
    // Sumamos un producto al grupo
    groups.get(categoryType).totalProducts++;
  });

  // Pasamos a array y ordenamos por categoryType
  return [...groups.values()].sort((a, b) => a.categoryType - b.categoryType);
};

// getProductById devuelve un producto por su id
export const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

// createProduct agrega un nuevo producto
export const createProduct = ({ title, price, category }) => {
// Normalizar la categoría a minúsculas y sin espacios
    const normalizedCategory = category.trim().toLowerCase(); // Normalizar la categoría a minúsculas y sin espacios
    const existingProduct = products.find((p) => p.category === normalizedCategory); // Verificar si ya existe un producto con la misma categoría
// Asignar un categoryType basado en la categoría existente o crear uno nuevo
    const categoryType = existingProduct 
        ? existingProduct.categoryType 
        : Math.max(0, ...products.map((p) => p.categoryType)) + 1; // Asignar un nuevo categoryType si no existe un producto con la misma categoría
    
// Obtener el último ID de los productos existentes y crear un nuevo producto con el siguiente ID
    const lastID =
    products.length > 0
      ? Math.max(...products.map((product) => product.id))
      : 0; // Obtener el último ID de los productos existentes
  
    const newProduct = {
    id: lastID + 1,
    title,
    price: Number(price),
    category: normalizedCategory,
    categoryType,
  }; // Crear un nuevo producto con el siguiente ID
  
  products.push(newProduct); // Agregar el nuevo producto al array de productos
  return newProduct; // Devolver el nuevo producto creado
};
