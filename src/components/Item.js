import React from "react";

const Item = props => (
  <div>
    <div>
      <p>{props.el[0]}:</p>
      <p>{props.el[1]}</p>
    </div>
    <button onClick={() => props.clickHandler(props.el[0])}>+</button>
  </div>
);

export default Item;
