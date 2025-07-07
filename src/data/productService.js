const products = [
  {
    id: 1,
    name: "Laptop",
    description:
      "High-performance laptop with long battery life and sleek design.",
    price: 1200,
    weight: 2.5,
    image: "https://via.placeholder.com/300x200?text=Laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    description:
      "Latest smartphone with OLED display and triple camera system.",
    price: 800,
    weight: 0.5,
    image: "https://via.placeholder.com/300x200?text=Smartphone",
  },
  {
    id: 3,
    name: "Headphones",
    description:
      "Wireless noise-cancelling headphones with high-fidelity sound.",
    price: 200,
    weight: 0.3,
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
