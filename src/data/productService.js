const products = [
  {
    id: 1,
    name: "Laptop",
    description:
      "High-performance laptop with long battery life and sleek design.",
    price: 1200,
    weight: 2.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxfuAFX0nY82Jv5B61R0XEDe3C6ANGHjhEQ&s",
  },
  {
    id: 2,
    name: "Smartphone",
    description:
      "Latest smartphone with OLED display and triple camera system.",
    price: 800,
    weight: 0.5,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/09/iphone-2048px-6979.jpg?auto=webp&quality=75&width=1024",
  },
  {
    id: 3,
    name: "Headphones",
    description:
      "Wireless noise-cancelling headphones with high-fidelity sound.",
    price: 200,
    weight: 0.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlDa9GUDqS6_IJntzoWN1LpU-QH630GsLNQ&s",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
