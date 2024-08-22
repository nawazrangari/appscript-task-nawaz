import React from "react";
import "./ProductCard.css";
// import hart from "./images/img2.png"; // Assuming the heart image is common
import heart from '../../images/img2.png'
import heartlike from '../../images/heart.png'

function ProductCard({ img, title, isLike }) {
  return (
    <div className="card-wrapper">
      <p className="new-product">NEW PRODUCT</p>
      <div className="product">
        <img src={img} alt={title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">Sign in or Create an account to see pricing</p>
        </div>
        <img src={isLike ? heartlike : heart} alt="Heart icon" className="product-heart" />
      </div>
    </div>
  );
}

export default ProductCard;
