import React, { useState } from "react";
import { useCreateUserMutation } from "../../../context/userApi";
import { Container, TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";

const CreateUser = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [phones, setPhones] = useState([]);
  const [tel, setTel] = useState("");
  console.log(phones);
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  if (error) {
    toast(error.message);
  }
  if (isLoading) {
    return <h1>loading......</h1>;
  }
  if (data?.variant === "success") {
    navigate("/users");
  }

  console.log("data >>>", data);

  const handleAddTelNumber = () => {
    setPhones((p) => [...p, tel]);
    setTel("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    let user = {
      FirstName,
      LastName,
      phones,
      role,
      password,
      UserName,
      isActive: true,
    };
    createUser(user);
  };
  return (
    <div>
      <Container maxWidth="xl">
        <form onSubmit={handleSignUp} className="form2" action="">
          <h2>Create user</h2>
          <br />
          <div className="names">
            {" "}
            <TextField
              id="outlined-basic"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              label="FirstName"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              label="LastName"
              variant="outlined"
            />
          </div>
          <div className="number">
            {" "}
            <PatternFormat
              value={tel}
              className="nm"
              onChange={(e) => setTel(e.target.value)}
              format="+998 ## ### ## ##"
              allowEmptyFormatting
              mask="_"
            />
            <Button
              onClick={handleAddTelNumber}
              type="button"
              variant="contained"
            >
              Add
            </Button>
          </div>
          <div className="username">
            {" "}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              name=""
              id=""
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="owner">Owner</option>
            </select>
            <TextField
              id="outlined-basic"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="UserName"
              variant="outlined"
            />
          </div>
          <TextField
            id="outlined-basic"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            label="password"
            variant="outlined"
          />
          <Button variant="contained">Submit</Button>{" "}
        </form>
      </Container>
    </div>
  );
};

export default CreateUser;
