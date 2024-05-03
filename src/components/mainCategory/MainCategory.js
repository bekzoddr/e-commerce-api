import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { homeimgproducts } from "../../static/Router";

function MainCategory() {
  const categoryHomeItems = homeimgproducts?.map((el) => (
    <div key={el.id} className="category__card">
      <img src={el.img} alt="rasm" />
      <h5>{el.title}</h5>
    </div>
  ));

  return (
    <div className="main__Category">
      <div className="container">
        <div className="main__Category__wrapper">
          <div className="main__Category__top">
            <div className="main__Category__top__title__wrapper">
              <span></span>
              <p>Categories</p>
            </div>
            <div className="main__Category__top__bottom"></div>
          </div>
          <div className="main__Category__bottom">
            <h2>Browse By Category</h2>
            <div className="main__Category__top__img__wrapper">
              <FaArrowLeft />
              <FaArrowRight />
            </div>
          </div>
          <div className="Caregory__cards">{categoryHomeItems}</div>
        </div>
      </div>
    </div>
  );
}

export default MainCategory;
