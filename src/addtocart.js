import axios from "axios";
const addToCart = (product) => {
  axios
    .post("http://localhost:4000/cart/", {
      _id: product._id,
      title: product.title,
      price: product.price,
      discount: product.discount,
      category: product.category,
      deliveryTime: 3,
    })
    .then((response) => console.log("Product added to cart", response))
    .catch((error) => console.log("Error:", error));
};

export default addToCart;
