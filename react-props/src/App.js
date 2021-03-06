import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardSection from "./CardSection";

// class Welcome extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     return <h1>Welcome tot the class</h1>;
//   }
// }

function App() {
  return (
    <div className="app">
      {/* <Welcome title="Mr" name="John" age={20} />
      <Welcome title="Mr" name="Peter" age={40} /> */}

      <Navbar />
      <Banner />
      <CardSection />
      {/* <AppSection />
      <Footer /> */}
    </div>
  );
}

export default App;
