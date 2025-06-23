import React from 'react';

const ProductCard = ({ name, image, price, description, stock }) => (
  <div style={cardStyle}>
    <img src={image} alt={name} style={imgStyle} />
    <h3>{name}</h3>
    <p><strong>Price:</strong> ₹{price}</p>
    <p>{description}</p>
    <p style={{ color: stock === "In Stock" ? "green" : "red" }}>
      <strong>{stock}</strong>
    </p>
  </div>
);

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "16px",
  margin: "10px",
  width: "220px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

const imgStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover"
};

export default ProductCard;
