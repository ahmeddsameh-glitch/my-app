import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "./products";
import ProductDetails from "./ProductDetails";
import { ProductProvider } from "./ProductContext";
import BasicExample from "./navbar"; // Importing the Navbar

function App() {
  return (
    <ProductProvider>
      <Router>
        <>
          <BasicExample />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Routes>
        </>
      </Router>
    </ProductProvider>
  );
}

export default App;
