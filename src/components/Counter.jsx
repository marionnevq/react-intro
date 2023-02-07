import React, { Component } from "react";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  getClassName() {
    if (this.props.counter.value > 0) {
      return "badge bg-primary mx-1";
    }
    return "badge bg-warning text-dark mx-1";
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
          <button
            onClick={() => this.props.onDelete(counter.id)}
            className="btn btn-danger mx-1"
          >
            Delete
          </button>
          <button
            onClick={() => this.props.onDecrement(counter.id)}
            className="btn btn-secondary mx-1"
            disabled={counter.value === 0}
          >
            -
          </button>
          <span className={this.getClassName()}>{this.formatText()}</span>
          <button
            onClick={() => this.props.onIncrement(counter.id)}
            className="btn btn-primary mx-1"
          >
            +
          </button>
        </>
      );
    } else {
      button = (
        <>
          <button
            onClick={() => this.props.onIncrement(counter.id)}
            className="btn btn-primary mx-1"
          >
            Add To Cart
          </button>
        </>
      );
    }

    return (
      <>
        <div className="card mb-4">
          <img
            className="card-img-top"
            src="https://picsum.photos/200"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">PS5 Disk Version</h5>
            <p className="card-text">Php 27000.00 </p>
            <p className="card-text">in stock: 25</p>
            {button}
          </div>
        </div>
      </>
    );
  }
}
