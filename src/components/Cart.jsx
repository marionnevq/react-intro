import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { totalCount } = this.props;
    return (
      <>
        <button type="button" class="btn btn-primary mt-1 position-relative">
          Cart
          {totalCount > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
            </span>
          )}
        </button>
      </>
    );
  }
}
