import React from "react";
import PropTypes from "prop-types";

import Box from "./box";

const board = ({ board, handleBoxClicked }) => {
  return (
    <div className="container">
      <h1>Battleships!</h1>
      <div className="board">
        {board.map((item, index) => (
          <Box
            value={item}
            key={index}
            onClick={() => handleBoxClicked(index)}
          />
        ))}
      </div>
    </div>
  );
};

board.propTypes = {
  board: PropTypes.array.isRequired,
  handleBoxClicked: PropTypes.func.isRequired
};

export default board;
