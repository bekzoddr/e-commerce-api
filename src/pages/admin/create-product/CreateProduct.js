import React, { useState } from "react";
import { Container, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useGetCategoryQuery } from "../../../context/categoryApi";
import { useCreateProductMutation } from "../../../context/productApi";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const { data: categories } = useGetCategoryQuery();
  const [createProduct, { isLoading, data, error }] =
    useCreateProductMutation();

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let productForm = new FormData();
    productForm.append("title", title);
    productForm.append("price", price);
    productForm.append("category", category);
    productForm.append("units", units);
    productForm.append("oldPrice", 150);
    productForm.append("description", description);
    productForm.append("info", {});
    Array.from(files).forEach((el) => {
      productForm.append("files", el, el.name);
    });
    createProduct(productForm);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  let categoriesItems = categories?.data?.map((el) => (
    <option key={el.id} value={el.title}>
      {el.title}
    </option>
  ));

  let unitsItem = ["kg", "size", "color", "quantity"].map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

  return (
    <div>
      <Container maxWidth="xl">
        <form onSubmit={handleCreateProduct} className="form2" action="">
          <h2>Create product</h2>
          <br />
          <div className="names">
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="outlined-basic"
              type="text"
              label="Title"
              variant="outlined"
            />
            <TextField
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              type="number"
              label="Price"
              variant="outlined"
            />
          </div>
          <div className="username">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              {categoriesItems}
            </select>
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
              <option value="">Select</option>
              {unitsItem}
            </select>
          </div>
          <TextField
            type="file"
            onChange={handleFileChange}
            variant="outlined"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <div>
            {Array.from(files).map((el, index) => (
              <img key={index} src={URL.createObjectURL(el)} alt="" />
            ))}
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CreateProduct;
