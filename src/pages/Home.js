import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-content">
        <h1>Welcome to Our Store!</h1>
        <p>
          Discover great deals on high-quality products tailored just for you.
        </p>
        <Link to="/products" className="home-btn">
          Browse Products
        </Link>
      </div>
    </div>
  );
}
