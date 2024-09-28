import React, { useState, useEffect } from "react";
import axios from "axios";
import addToCart from "./addtocart";
function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {products.map((product) => (
        <div key={product._id} style={{ marginBottom: "20px" }}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.category && <p>Category: {product.category}</p>}
          {product.discount && <p>Discount: {product.discount}%</p>}
          {product.image && (
            <img src={product.image} alt={product.title} width="100" />
          )}
          <button
            onClick={() =>
              addToCart({
                title: product.title,
                price: product.price,
                id: product._id,
                discount: product.discount,
                category: product.category,
              })
            }
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductsList;
