const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop",
    price: 1200,
    weight: 2.5,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 800,
    weight: 0.5,
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    price: 200,
    weight: 0.3,
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
