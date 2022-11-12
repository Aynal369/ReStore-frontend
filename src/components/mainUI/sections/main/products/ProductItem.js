import React from "react";
import { Rating } from "react-simple-star-rating";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductItem = ({ item }) => {
  const { brand, category, price, rating, thumbnail, title } = item;
  console.log(item.category);
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card product_card" style={{ minHeight: "30rem" }}>
        <figure>
          <img
            src={thumbnail}
            className="card-img-top"
            alt={title}
            height={250}
          />
        </figure>

        <div className="card-body">
          <h5 className="card-title text-center mb-3">{title}</h5>
          <div className="d-flex justify-content-around text-muted">
            <button className="btn btn-light rounded-5 shadow-sm">
              {brand}
            </button>
            <button className="btn btn-light rounded-5 shadow-sm">
              {category}
            </button>
          </div>
          <div className="mt-4">
            <span>Rating</span>{" "}
            <Rating initialValue={rating} size={20} readonly />
          </div>
        </div>
        <div class="card-footer bg-light d-flex justify-content-between">
          <button type="button" className="btn btn-light text-muted">
            $ <span className="fw-bold"> {price}</span>
          </button>
          <div className="flex">
            <button
              type="button"
              className="btn btn-outline-success border rounded-pill me-2"
            >
              <FaHeart color="#157347" />
            </button>
            <button
              type="button"
              className="btn btn-outline-danger border rounded-pill me-2"
            >
              <FaShoppingCart color="#BB2D3B" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
