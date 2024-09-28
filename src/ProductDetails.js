import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { ProductContext } from "./ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function ProductDetails() {
  const { productId } = useParams(); // Get productId from URL params
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p._id === productId);
    console.log("Checking products for ID:", productId); 

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setError("Product not found");
      setLoading(false);
    }
  }, [productId, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Error: Product not found.</div>;
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={product.image || "placeholder.png"}
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetails;

const addToCart = (product) => {
  console.log("Added to cart:", product);
};
