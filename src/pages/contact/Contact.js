import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      {" "}
      <div className="contact container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="link">
          <Link to="/">Home</Link>/<Link to="/account">Account</Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="contact__content container">
          {" "}
          <div className="phone__box">
            <div className="call">
              <BsTelephone className="icon" />
              <h3>Call To Us</h3>
            </div>
            <h4>We are available 24/7, 7 days a week.</h4>
            <h4>Phone: +8801611112222</h4>
            <br />
            <hr />
            <br />
            <div className="mail">
              <CiMail className="icon" />
              <h3>Write To Us</h3>
            </div>
            <h4>
              Fill out our form and we will contact <br /> you within 24 hours.
            </h4>
            <h4>Emails: customer@exclusive.com</h4>
            <h4>Emails: support@exclusive.com</h4>
          </div>
          <div className="register__box">
            <div className="register">
              <input placeholder="Your Name" type="text" />
              <input placeholder="Your Email" type="text" />
              <input placeholder="Your Phone" type="text" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button>Send Massage</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
