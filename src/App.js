import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Customizer from "./Customize/Customizer";
import Cart from "./Cart/Cart";
import features from "./store";

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  //***UPDATE FEATURE FUNCTION**** *//
  updateFeature = (feature, newValue) => {
    console.log("update feature ran");
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  //render function for whole app..
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Customizer
              features={features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
