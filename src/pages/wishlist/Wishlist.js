import React, { memo } from "react";
import { useEffect, useState } from "react";
import axios from "../../api";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Empty from "../../components/empty/Empty";
const Wishlist = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "200px",
        marginBottom: "30px",
      }}
    >
      {wishes.length ? (
        <Product
          title="Wishlist"
          button="Move All To Bag"
          time="Favourite"
          data={wishes}
        />
      ) : (
        <Empty />
      )}
      <Product button="See all" time="Just For You" data={data} />
    </div>
  );
};

export default memo(Wishlist);
