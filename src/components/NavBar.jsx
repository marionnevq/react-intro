import React, { Component } from "react";
import Cart from "./Cart";

export default class NavBar extends Component {
  render() {
    const { onReset, totalCount, counters, cart } = this.props;
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
  }
}
