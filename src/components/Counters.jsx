import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counters } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            {counters.map((counter) => (
              <div className="col-xs-12 col-md-6 col-xl-3">
                <Counter
                  onDelete={onDelete}
                  counter={counter}
                  key={counter.id}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
