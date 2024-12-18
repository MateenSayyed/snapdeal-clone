import React from "react";
import "./ProductGrid.css";

const products = [
  {
    id: 1,
    name: "viv Sneakers Black Casual Shoes",
    price: "₹999",
    imageUrl: "../public/download.jpg",
  },
  {
    id: 2,
    name: "KHADIM Tan Casual Shoes",
    price: "₹1299",
    imageUrl: "../public/images (1).jpg",
  },
  {
    id: 3,
    name: "SHOES KINGDOM Brown Shoes",
    price: "₹1199",
    imageUrl: "../public/images (2).jpg",
  },
  {
    id: 4,
    name: "Xtoon White Lifestyle Shoes",
    price: "₹1499",
    imageUrl: "../public/images (3).jpg",
  },
  {
    id: 5,
    name: "KHADIM Tan Casual Shoes",
    price: "₹1299",
    imageUrl: "../public/images (4).jpg",
  },
  {
    id: 6,
    name: "SHOES KINGDOM Brown Shoes",
    price: "₹1199",
    imageUrl: "../public/images.jpg",
  },
  {
    id: 7,
    name: "Xtoon White Lifestyle Shoes",
    price: "₹1499",
    imageUrl: "../public/shoe.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
