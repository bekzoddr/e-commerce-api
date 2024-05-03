import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../context/userApi";
import { toast } from "react-toastify";
import userImg from "../../assets/images/user.webp";
import admin from "../../assets/images/admin.jpg";
import Container from "@mui/material/Container";
function Account() {
  const { data, error } = useGetUsersQuery();

  if (error) {
    toast(error.message);
  }
  let users = data?.data?.map((user) => (
    <div className="userCard">
      {user.role === "admin" ? (
        <img src={admin} alt="Admin" />
      ) : (
        <img src={userImg} alt="User" />
      )}{" "}
      <div className="userCard__info">
        <div className="name">
          <h2>{user.FirstName}</h2>
          <h3>{user.LastName}</h3>
        </div>
        <div className="user">
          <h2>{user.UserName}</h2>
          <h3>{user.role}</h3>
        </div>
      </div>
    </div>
  ));
  return (
    <Container maxWidth="xl">
      <div className="account container">
        <div className="account__links">
          <div className="link">
            <Link to="/">Home</Link>/<Link to="/account">Account</Link>
          </div>
          <div className="link__title">
            <h3>
              <span>Welcome!</span>Md Rimel
            </h3>
          </div>
        </div>
        <div className="account__content container">
          <div className="sidebarr">
            <h2>Manage My Account</h2>
            <ul>
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
            <h2>My Orders</h2>
            <ul>
              <li>My Returns</li>
              <li>My Cansellations</li>
            </ul>
            <h2>My Wishlist</h2>
          </div>
          <form className="form__box container">
            <h2>Edit Your Profile</h2>
            <div className="names">
              <div className="name">
                <label htmlFor="text">First Name</label>
                <input type="text" placeholder="Bekzod" />
              </div>
              <div className="surName">
                <label htmlFor="text">Last Name</label>
                <input type="text" placeholder="Sodiqov" />
              </div>
              <div className="email">
                <label htmlFor="text">Email</label>
                <input type="text" placeholder="@gmail.com" />
              </div>
              <div className="address">
                {" "}
                <label htmlFor="text">Addres</label>
                <input type="text" placeholder="ц1" />
              </div>
            </div>
            <h3>Password Changes</h3>
            <div className="passwords">
              <input type="text" placeholder="Current Password" />
              <input type="text" placeholder="New Password" />
              <input type="text" placeholder="Confirm New Password" />
            </div>
            <div className="buttons">
              <button className="cancel">Cancel</button>
              <button>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <h2>Users</h2>
        <br />
        <hr />
        <br />
        <div className="users2">{users}</div>
      </div>
    </Container>
  );
}

export default Account;
