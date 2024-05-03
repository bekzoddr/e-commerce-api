import React, { memo, useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import TimerBox from "../../components/timerBox/TimerBox";
import Product from "../../components/product/Product";
import axios from "../../api";
import { FaStar, FaRegHeart, FaRegEye } from "react-icons/fa";
import { useGetProductQuery } from "../../context/productApi";
import MainCategory from "../../components/mainCategory/MainCategory";
import HomeCollection from "../../components/homeCollection/HomeCollection";
import { homeIconsproducts } from "../../static/Router";
const Home = () => {
  const [data, setData] = useState([]);
  const { data: proData } = useGetProductQuery({ limit: 10, count: 5 });
  console.log(proData);
  let products = proData?.data?.map((el) => (
    <div key={el.id} className="card">
      <div className="card__img">
        <img src="" alt="" />
        <button className="cart">Add To Cart</button>
        <div className="click">
          <button className="likeBtn">
            <FaRegHeart className="likes" />
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
        <button>delete</button>
      </div>
    </div>
  ));
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let homeicoonsitems = homeIconsproducts?.map((el) => (
    <div key={el.id} className="home__box">
      <img src={el.img} alt="" />
      <h4>{el.title}</h4>
      <p>{el.text}</p>
    </div>
  ));

  return (
    <div>
      <br />
      <br />
      <br />
      <Hero />
      {/* <br /> */}
      <div className="main__product">
        <Product
          time="Today's"
          title="Flash Sales"
          button="View All"
          data={data?.slice(5, 10)}
        />
      </div>
      <MainCategory />
      <div className="main__product">
        <Product
          time="This Month"
          title="Best Selling Products"
          button="View All"
          data={data?.slice(10, 15)}
        />
      </div>
      <br />
      <br />
      <TimerBox />
      <div className="main__product">
        <Product
          time="Our Products"
          title="Explore Our Products"
          button="View All"
          data={data?.slice(14, 24)}
        />
      </div>
      <br />
      <br />
      <div className="main__product">
        <Product time="Featured" title="New Arrival" button="View All" />
      </div>
      <HomeCollection />
      <div className="container">
        <div className="homeBoxs">{homeicoonsitems}</div>
      </div>
      <br />
      <div className="container">
        <h2>Products</h2>
        <br />
        <hr />
        <br />
        <div className="products">{products}</div>
      </div>
    </div>
  );
};

export default memo(Home);
