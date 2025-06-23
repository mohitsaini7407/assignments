import React from 'react';

const FriendCard = ({ name, image, hobby, quote, contact }) => (
  <div style={cardStyle}>
    <img src={image} alt={name} style={imgStyle} />
    <h3>{name}</h3>
    <p><strong>Hobby:</strong> {hobby}</p>
    <p><em>"{quote}"</em></p>
    <p><strong>Contact:</strong> {contact}</p>
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
  borderRadius: "50%",
  objectFit: "cover"
};

export default FriendCard;
