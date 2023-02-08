import React, { Component } from "react";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  formatText() {
    if (this.props.counter.value > 0) {
      return this.props.counter.value;
    }
    return "Zero";
  }

  showButtons() {
    if (this.props.counter.value > 0) {
      return this.props.counter.value;
    }
    return "Zero";
  }

  render() {
    const { counter } = this.props;
    let button;

    if (counter.value > 0) {
      button = (
        <>
          {/* <button
            onClick={() => this.props.onDelete(counter.id)}
            className="btn btn-danger mx-1"
          >
            Delete
          </button> */}
          <div className="btn-group" role="group">
            <button
              onClick={() => this.props.onDecrement(counter.id)}
              className="btn btn-secondary "
              disabled={counter.value === 0}
            >
              -
            </button>
            <span
              className="btn btn-outline-secondary"
              style={{ pointerEvents: "none" }}
            >
              {this.formatText()}
            </span>
            <button
              onClick={() => this.props.onIncrement(counter.id)}
              className="btn btn-secondary"
            >
              +
            </button>
          </div>
        </>
      );
    } else {
      button = (
        <>
          <button
            onClick={() => this.props.onIncrement(counter.id)}
            className="btn btn-primary mr-1"
          >
            Add To Cart
          </button>
        </>
      );
    }

    return (
      <>
        <div className="card mb-3">
          <img
            className="card-img-top"
            src="https://picsum.photos/200"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Item no: {counter.id}</p>
            <h5 className="card-title">{counter.name}</h5>
            <p className="card-text">Php {counter.price}</p>

            <p className="card-text">in stock: {counter.stock}</p>
            {button}
          </div>
        </div>
      </>
    );
  }
}
