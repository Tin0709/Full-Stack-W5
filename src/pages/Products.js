import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { getProducts, getProductById } from "../data/productService";
import { useParams } from "react-router-dom";

function ProductDetails({ id }) {
  const product = getProductById(id);
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-details">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Weight: {product.weight}kg</p>
    </div>
  );
}

export default function Products() {
  const products = getProducts();

  return (
    <div className="products-page">
      <div className="product-list">
        {products.map((p) => (
          <Link key={p.id} to={p.id.toString()}>
            {p.name}
          </Link>
        ))}
      </div>
      <div className="product-detail-panel">
        <Routes>
          <Route path=":productId" element={<ProductDetailWrapper />} />
          <Route path="*" element={<p>Select a product to view details.</p>} />
        </Routes>
      </div>
    </div>
  );
}

function ProductDetailWrapper() {
  const { productId } = useParams();
  return <ProductDetails id={parseInt(productId)} />;
}
