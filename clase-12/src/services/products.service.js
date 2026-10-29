// Datos simulados
const products = [
  { id: 1, title: 'Remera Rex', price: 300, category: 'remeras' },
  { id: 2, title: 'Gorra Node', price: 150, category: 'accesorios' },
  { id: 3, title: 'Buzo Express', price: 500, category: 'buzos' },
  { id: 4, title: 'Remera Express', price: 250, category: 'remeras' },
];

// Devuelve todos los productos, con filtros opcionales
export const getAllProducts = ({ category, maxPrice } = {}) => {
  let result = products;

  if (category) {
    result = result.filter((p) => p.category === category);
  }
  if (maxPrice) {
    result = result.filter((p) => p.price <= Number(maxPrice));
  }

  return result;
};

// Devuelve un producto por id (o undefined si no existe)
export const getProductById = (id) => {
  return products.find((p) => p.id === Number(id));
};

// Crea un producto nuevo y lo agrega a la lista
export const createProduct = ({ title, price, category }) => {
  const lastId = products.length ? products[products.length - 1].id : 0;
  const newProduct = { id: lastId + 1, title, price: Number(price), category };
  products.push(newProduct);
  return newProduct;
};
