import React, { useState, useEffect } from "react";
import axios from "axios";
import addToCart from "./addtocart";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
    <div className="products-list">
      {products.map((product) => (
        <Card
          key={product._id}
          style={{ width: "18rem", marginBottom: "20px" }}
        >
          <Card.Img
            variant="top"
            src={product.image || "holder.js/100px180"}
            alt={product.title}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            {product.category && (
              <Card.Text>Category: {product.category}</Card.Text>
            )}
            {product.discount && (
              <Card.Text>Discount: {product.discount}%</Card.Text>
            )}

            {/* Add To Cart Button */}
            <Button
              variant="primary"
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
            </Button>

            {/* View Details Button */}
            <Link to={`/products/${product._id}`}>
              <Button variant="secondary" style={{ marginLeft: "10px" }}>
                View Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProductsList;
