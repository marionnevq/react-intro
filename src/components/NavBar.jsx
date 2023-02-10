import React from "react";
import Cart from "./Cart";
const NavBar = ({ onReset, totalCount, counters, cart }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Cart totalCount={totalCount} products={counters} cart={cart}></Cart>
        {totalCount > 0 && (
          <button onClick={onReset} className="  btn btn-danger ">
            Empty Cart
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
