import React from "react";
import "./App.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }
  render() {
    return (
      <div className="app">
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount
        </button>
        {/* <Counter /> */}
        {this.state.mount ? <Counter2 /> : null}
      </div>
    );
  }
}

export default App;
