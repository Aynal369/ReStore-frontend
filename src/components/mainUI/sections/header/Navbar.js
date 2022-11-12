import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import avatar from "../../../../images/user.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h4>
            <span className="text-warning fw-bold">Re</span>Store
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-4 fw-semibold">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-4 fw-semibold">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item px-4 fw-semibold">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-4 fw-semibold">
              <NavLink className="nav-link" to="/shop">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            type="button"
            className="btn btn-sm btn-light rounded-pill me-2"
          >
            <FaHeart color="#157347" />
          </button>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-pill me-2"
          >
            <FaShoppingCart color="#BB2D3B" />
          </button>
          <img src={avatar} alt="avatar" width={34} height={34} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
