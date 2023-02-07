import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const { onReset, totalCount } = this.props;
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <button type="button" class="btn btn-primary mt-1 position-relative">
            Cart
            {totalCount > 0 && (
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCount}
              </span>
            )}
          </button>
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
