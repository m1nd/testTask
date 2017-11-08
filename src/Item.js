import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.el[0]}:</p>
          <p>{this.props.el[1]}</p>
        </div>
        <button onClick={() => this.props.clickHandler(this.props.el[0])}>
          +
        </button>
      </div>
    );
  }
}

export default Item;
