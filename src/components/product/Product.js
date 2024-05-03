import React, { memo } from "react";
import { FaRegHeart, FaRegEye, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { Link } from "react-router-dom";
import { addToCard } from "../../context/cartSlice";
const Product = ({ data: dataa, title, button, time }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  let products = dataa?.map((el) => (
    <div key={el.id} className="card">
      <div className="card__img">
        <Link to={`/single/${el.id}`}>
          <img src={el.thumbnail} alt="" />
        </Link>
        {cart.some((c) => c.id === el.id) ? (
          <button className="cart added">Added</button>
        ) : (
          <button onClick={() => dispatch(addToCard(el))} className="cart">
            Add To Cart
          </button>
        )}

        <div className="click">
          <button
            className="likeBtn"
            onClick={() => dispatch(toggleToWishes(el))}
          >
            {" "}
            {wishes.some((w) => w.id === el.id) ? (
              <FaHeart className="likes" />
            ) : (
              <FaRegHeart className="likes" />
            )}
          </button>
          <button className="eyeBtn">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="card__info">
        <h2>{el.title}</h2>
        <div className="price">
          <h3 className="new__price">${el.price}</h3>
          <h3 className="old__price">$360</h3>
        </div>
        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <h3>(65)</h3>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="product__title container">
        <div className="frame">
          <div className="box"></div>
          <h2>{time}</h2>
        </div>
        <div className="title">
          <h1>{title}</h1>
          <button>{button}</button>
        </div>
      </div>
      <div className="products container">{products}</div>
      <br />
    </>
  );
};

export default memo(Product);
