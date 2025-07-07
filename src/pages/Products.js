import React from "react";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import { getProducts, getProductById } from "../data/productService";
import "./Products.css";

function ProductDetails({ id }) {
  const product = getProductById(id);
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail-panel">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Weight:</strong> {product.weight}kg
      </p>
    </div>
  );
}

function ProductDetailWrapper() {
  const { productId } = useParams();
  return <ProductDetails id={parseInt(productId)} />;
}

export default function Products() {
  const products = getProducts();

  return (
    <div className="products-page">
      <div className="product-list">
        {products.map((p) => (
          <NavLink
            key={p.id}
            to={p.id.toString()}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {p.name}
          </NavLink>
        ))}
      </div>
      <div className="product-detail-panel">
        <Routes>
          <Route path=":productId" element={<ProductDetailWrapper />} />
          <Route
            path="*"
            element={<p>Please select a product from the list.</p>}
          />
        </Routes>
      </div>
    </div>
  );
}
