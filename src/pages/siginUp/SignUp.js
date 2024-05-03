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
              <h2>Create an account</h2>
              <p>Enter your details below</p>
            </div>
            <div className="input__forms">
              <div>
                <input placeholder="Name" type="text" />
                <hr />
              </div>
              <div>
                <input placeholder="Email or Phone Number" type="text" />
                <hr />
              </div>
              <div>
                <input placeholder="Password" type="text" />
                <hr />
              </div>
              <button>Create Account</button>
              <div className="icons__links">
                <FcGoogle />
                <p>Sign up with Google</p>
              </div>
            </div>
            <NavLink className="toLogin__link" to={"/login"}>
              Already have account?
              <p>Log in</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
