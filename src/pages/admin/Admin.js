import React from "react";
import { BiCategory, BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Admin = () => {
  return (
    <div className="admin">
      <div style={{ height: window.innerHeight }} className="admin__sidebar">
        <NavLink to={"/admin"}>
          <h2>Admin</h2>
        </NavLink>
        <ul>
          <li>
            <NavLink className="admin__link" to={"create-category"}>
              Create Category <BiCategory />
            </NavLink>
          </li>
          <li>
            <NavLink className="admin__link" to={"manage-category"}>
              Manage Category
              <CiEdit />
            </NavLink>
          </li>
          <li>
            <NavLink className="admin__link" to={"create-product"}>
              {" "}
              Create Product
              <FaShoppingCart />
            </NavLink>
          </li>
          <li>
            <NavLink className="admin__link" to={"manage-product"}>
              Manage Product <CiEdit />
            </NavLink>
          </li>
          <li>
            <NavLink className="admin__link" to={"create-user"}>
              Create User <BiUser />
            </NavLink>
          </li>
          <li>
            <NavLink className="admin__link" to={"manage-user"}>
              {" "}
              Manage User <CiEdit />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="admin__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
