import React from "react";
import signimg from "../../assets/homeImages/signUp.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <div className="signUp">
      <div className="container">
        <div className="signUp__wrapper">
          <img src={signimg} alt="" />
          <div className="signUp__wrapper__right">
            <div className="signUp__title__wrapper">
              <h2>Log in to Exclusive</h2>
              <p>Enter your details below</p>
            </div>
            <div className="input__forms">
              <div>
                <input placeholder="Email or Phone Number" type="text" />
                <hr />
              </div>
              <div>
                <input placeholder="Password" type="text" />
                <hr />
              </div>
            </div>
            <NavLink className="toLogin__link" to={"/login"}>
              <button className="login__btn">Log in</button>
              <p className="login__text__forget">Forget password</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
