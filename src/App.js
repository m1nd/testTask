import React, { Component } from "react";

import "./App.css";
import Item from "./components/Item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: 1,
      item2: 3,
      item3: 6,
      item4: 7,
      item5: 9
    };

    this.converteData();
    this.converteData = this.converteData.bind(this);
    this.changeCounter = this.changeCounter.bind(this);
  }

  converteData() {
    this.convertedData = Object.keys(this.state).map(key => [
      key,
      this.state[key]
    ]);
  }

  changeCounter(el) {
    let newState = this.state;
    newState[el]++;
    this.setState(newState);
    this.converteData();
  }

  render() {
    return (
      <section className="list">
        {this.convertedData.map((el, index) => (
          <Item
            key={index}
            el={el}
            clickHandler={item => this.changeCounter(item)}
          />
        ))}
      </section>
    );
  }
}

export default App;
