import React, { useState } from "react";

const Box = props => {
  return <div className="box">{props.number}</div>;
};

const Board = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container">
      <h1>Battleships!</h1>
      <div className="board">
        {boxes.map(item => (
          <Box number={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Board;
