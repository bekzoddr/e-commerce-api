import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import mainUrl from "../../api";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Product from "../../components/product/Product";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { decCart, incCart } from "../../context/cartSlice";
function SingleRoute() {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h1>loading......</h1>;
  }
  return (
    <>
      <div className="single container">
        <div className="images">
          <div className="thumbnails">
            <img src={product?.images[0]} alt="" />
            <img src={product?.images[1]} alt="" />
            <img src={product?.images[2]} alt="" />
            <img src={product?.images[3]} alt="" />
          </div>
          <img className="first" src={product?.thumbnail} alt="" />
        </div>
        <div className="infos">
          <h2>{product?.title}</h2>
          <div className="rating">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3>(150 Reviews)</h3>
            <hr />
            <h3 className="stock">In Stock</h3>
          </div>
          <h2 className="price">${product?.price}</h2>
          <p className="description">{product?.description}</p>
          <hr />
          <div className="color">
            <h3>Colours:</h3>
            <input type="color" defaultValue="#ff0000" />
            <input type="color" defaultValue="#ff0000" />
          </div>
          <div className="size">
            <h3>Sizes:</h3>
            <h2>XS</h2>
            <h2>S</h2>
            <h2>M</h2>
            <h2>L</h2>
            <h2>Xl</h2>
          </div>
          <div className="prices">
            <div className="counter">
              <button>-</button>
              <div className="text">2</div>
              <button className="plus">+</button>
            </div>
            <button className="buy">Buy</button>
            <button className="like">
              <FaRegHeart className="likes" />
            </button>
          </div>
          <div className="delivery">
            <div className="deliver">
              <TbTruckDelivery className="icon" />
              <div className="text">
                <h3>Free Delivery</h3>
                <h4>Enter your postal code for Delivery Availability</h4>
              </div>
            </div>
            <hr />
            <div className="deliver">
              <LuRefreshCcw className="icon" />
              <div className="text">
                <h3>Return Delivery</h3>
                <h4>Free 30 Days Delivery Returns. </h4>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default memo(SingleRoute);
