import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
const NavBar = ({ onReset, totalCount, counters, cart }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Cart totalCount={totalCount} products={counters} cart={cart}></Cart>
        {totalCount > 0 && (
          <button onClick={onReset} className=" btn btn-danger">
            Empty Cart
          </button>
        )}
        <button
          className="btn btn-light btn-outline-secondary"
          onClick={() => {
            navigate("/products/add");
          }}
        >
          <span>
            <a>Add Product</a>
            <i className="bi bi-plus-circle p-1" />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
