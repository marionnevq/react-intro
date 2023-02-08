import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import { products } from "./data/Products";
export default class App extends Component {
  state = {
    counters: products,
    cart: [],
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
      cart: [],
    });
  };

  handleIncrement = (id) => {
    this.addCart(id);
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
          if (counter.value === 1) {
            this.removeCart(counter.id);
          }
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

  addCart = (id) => {
    if (this.state.cart.find((item) => item.id === id)) {
    } else {
      let newCartItem = {
        id: id,
      };

      this.setState({
        cart: [...this.state.cart, newCartItem],
      });
    }
  };

  removeCart = (id) => {
    this.setState({
      cart: this.state.cart.filter((item) => item.id !== id),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  render() {
    return (
      <div>
        <NavBar
          totalCount={this.getCountersWithValue()}
          onReset={this.handleReset}
          counters={this.state.counters}
          cart={this.state.cart}
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
