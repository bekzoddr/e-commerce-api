import React from "react";
import { Container, TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";
import Button from "@mui/material/Button";
import { useGetCategoryQuery } from "../../../context/categoryApi";

const CreateProduct = () => {
  const {data:categories}= useGetCategoryQuery()
  let categoryItem = categories?.data?.map((el) => (
    <option key={el.id} value={el.title}></option>
  ));
  return (
    <div>
      {" "}
      <Container maxWidth="xl">
        <form className="form2" action="">
          <h2>Create product</h2>
          <br />
          <div className="names">
            {" "}
            <TextField
              id="outlined-basic"
              type="text"
              label="Title"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              type="number"
              label="Price"
              variant="outlined"
            />
          </div>
          <div className="username">
            {" "}
            <select name="" id="">
              <option value="user">User</option>
            </select>
            <TextField
              id="outlined-basic"
              type="text"
              label="category"
              variant="outlined"
            />
          </div>
          <TextField id="outlined-basic" type="file" variant="outlined" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <Button variant="contained">Submit</Button>{" "}
        </form>
      </Container>
    </div>
  );
};

export default CreateProduct;
