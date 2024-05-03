import React from "react";
import { Link } from "react-router-dom";
import boxImage from "../../assets/images/box-image.png";
import image from "../../assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
function About() {
  const boxes = [
    {
      id: 1,
      title: "10.5k",
      text: "Sallers active our site",
    },
    {
      id: 2,
      title: "33k",
      text: "Mopnthly Produduct Sale",
    },
    {
      id: 3,
      title: "45.5k",
      text: "Customer active in our site",
    },
    {
      id: 4,
      title: "25.5k",
      text: "Anual gross sale in our site",
    },
  ];
  const users = [
    {
      id: 1,
      name: "Tom Cruise",
      profession: "Founder & Chairman",
      image: [user1],
    },
    {
      id: 2,
      name: "Emma Watson",
      profession: "Managing Director",
      image: [user2],
    },
    {
      id: 3,
      name: "Will Smith",
      profession: "Product Designer",
      image: [user3],
    },
  ];
  const infos = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      text: "We reurn money within 30 days",
    },
  ];
  const box = boxes?.map((el) => (
    <div key={el.id} className="box">
      <img src={boxImage} alt="" />
      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  ));
  const user = users?.map((el) => (
    <div className="user" key={el.id}>
      <img src={el.image[0]} alt="" />
      <h3>{el.name}</h3>
      <p>{el.profession}</p>
      <div className="icons">
        <CiTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  ));
  const info = infos?.map((el) => (
    <div key={el.id} className="info">
      <img src={boxImage} alt="" />
      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  ));
  return (
    <div className="about container">
      <div className="about__links">
        <Link to="/">Home</Link>/<Link to="/about">About</Link>
      </div>
      <div className="about__content">
        <div className="about__title">
          <h1>Our Story</h1>
          <br />
          <br />
          Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
          <br />
          makterplace with an active presense in Bangladesh. Supported <br /> by
          wide range of tailored marketing, data and service solutions, <br />{" "}
          Exclusive has 10,500 sallers and 300 brands and serves 3 <br />{" "}
          millioons customers across the region. <br />
          <br />
          Exclusive has more than 1 Million products to offer, growing at a{" "}
          <br /> very fast. Exclusive offers a diverse assotment in categories{" "}
          <br /> ranging from consumer.
        </div>
        <img src={image} alt="" />
      </div>
      <div className="about__boxes container">{box}</div>
      <div className="users container">{user}</div>
      <div className="datas container">{info}</div>
    </div>
  );
}

export default About;
