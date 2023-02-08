import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import { products } from "./data/Products";
export default class App extends Component {
  state = {
    counters: products,
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        return {
          ...counter,
          value: 0,
        };
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id && counter.stock > 0) {
          return {
            ...counter,
            value: counter.value + 1,
            stock: counter.stock - 1,
          };
        }
        return counter;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id && counter.value > 0) {
          return {
            ...counter,
            value: counter.value - 1,
            stock: counter.stock + 1,
          };
        }
        return counter;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  componentDidMount() {
    // api calls
    console.log("didmount");
  }

  render() {
    return (
      <div>
        <NavBar
          totalCount={this.getCountersWithValue()}
          onReset={this.handleReset}
        />
        <div className="container-fluid">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </div>
    );
  }
}
