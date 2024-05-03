import React, { memo } from "react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import qr from "../../assets/images/Qrcode.png";
import app1 from "../../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import app2 from "../../assets/images/download-appstore.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="wrapper">
          <h2 className="title">Exclusive</h2>
          <h3>Subscribe</h3>
          <h4>Get 10% off your first order</h4>
          <div className="send">
            <input type="text" placeholder="Enter your email" />
            <FaTelegramPlane />
          </div>
        </div>
        <div className="wrapper">
          <h2 className="title">Support</h2>
          <h4>
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </h4>
          <h4>exclusive@gmail.com</h4>
          <h4>+88015-88888-9999</h4>
        </div>
        <div className="wrapper">
          <h2 className="title">Account</h2>
          <h4>My Account</h4>
          <h4>Login / Register</h4>
          <h4>Cart</h4>
          <h4>Wishlist</h4>
          <h4>Shop</h4>
        </div>
        <div className="wrapper">
          <h2 className="title">Quick Link</h2>
          <h4>Privacy Policy</h4>
          <h4>Terms Of Use</h4>
          <h4>FAQ</h4>
          <h4>Contact</h4>
        </div>
        <div className="wrapper">
          <h2 className="title">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="images">
            <img src={qr} alt="qr-code" />
            <div className="apps">
              <img src={app1} alt="app" />
              <img src={app2} alt="app" />
            </div>
          </div>
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </footer>
      <div className="copyright">
        <br />
        <hr />
        <br />
        <h2>Copyright Rimel 2022. All right reserved</h2>
      </div>
    </>
  );
};

export default memo(Footer);
