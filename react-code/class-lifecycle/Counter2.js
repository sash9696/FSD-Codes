import React from "react";

export default class Counter2 extends React.Component {
  constructor(props) {
    console.log("Constructor is invoked");
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  componentDidMount() {
    console.log("component did mount");
    console.log("====================");
  }

  render() {
    console.log("render method is invoked");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>Counter : {this.state.counter} </h1>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("component did update");
    console.log("====================");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    console.log("====================");
  }
}
