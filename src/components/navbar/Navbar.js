import React, { memo } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import AdminPanelSettingsSharpIcon from "@mui/icons-material/AdminPanelSettingsSharp";
const Navbar = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const carts = useSelector((state) => state.cart.value);
  return (
    <nav>
      <div className="sub__nav">
        <h4>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>ShopNow</span>
        </h4>
        <div className="language">
          <h4>English</h4>
          <GoChevronDown />
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <h2>Exclusive</h2>
          </Link>
        </div>
        <ul className="nav__links">
          <li className="nav__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/signUp"}>Sign Up</NavLink>
          </li>
        </ul>
        <div className="navigations">
          <div className="search">
            <input placeholder="What are you looking for?" type="text" />
            <FiSearch />
          </div>
          <div className="icons">
            <NavLink className="heart" to="/wishlist">
              <FaRegHeart className="heartIcon" />
              {wishes.length > 0 ? (
                <sub>
                  <p>{wishes.length}</p>
                </sub>
              ) : (
                <></>
              )}
            </NavLink>
            <NavLink className="cart" to="/cart">
              <BsCart3 className="cartIcon" />
              {wishes.length > 0 ? (
                <sub>
                  <p>{carts.length}</p>
                </sub>
              ) : (
                <></>
              )}
            </NavLink>
            <NavLink className="person" to={"/account"}>
              <BsPerson className="personIcon" />
            </NavLink>
            <NavLink to={"/admin"}>
              <AdminPanelSettingsSharpIcon />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
};

export default memo(Navbar);
