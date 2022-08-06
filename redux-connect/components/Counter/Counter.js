import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../../actions";

import "./Counter.css";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.count}</h1>
        <p>
          <button onClick={() => this.props.incrementCount(5)}>+</button>
          <button onClick={() => this.props.decrementCount()}>-</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = () => {
  return {
    incrementCount,
    decrementCount,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
