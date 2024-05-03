import React from "react";
import image from "../../assets/images/favourite.jpg";
const Empty = () => {
  return (
    <div className="empty container">
      <img width={500} src={image} alt="" />
      <div className="info">
        <h2> Add what you like</h2>
        <h4>
          Click on ♡ in the product. Log in to your account and all your
          favorites will be saved.
        </h4>
      </div>
    </div>
  );
};

export default Empty;
