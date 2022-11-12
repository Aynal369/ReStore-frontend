import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://dummyjson.com/products";
    axios.get(url).then((res) => setProducts(res.data.products));
  }, []);
  return (
    <section>
      <div className="container-fluid">
        <h4 className="mt-5 border-bottom">New Products</h4>
        <div className="row g-4 my-4">
          {products.slice(0, 8).map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
