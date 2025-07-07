import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
