import React, { createContext, useState } from "react";

// Create the ProductContext
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, loading, setLoading, error, setError }}
    >
      {children}
    </ProductContext.Provider>
  );
};
