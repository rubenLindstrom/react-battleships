import React, { useState } from "react";

import Board from "./components/Board";
import PlayerPane from "./components/playerPane";

// Player constants
const SHIP_LIMIT = 5;

// Box states
const EMPTY = "EMPTY";
const HIT = "HIT";
const MISS = "MISS";
const SHIP = "SHIP";

// Phases
// 0: Placement phase
// 1: Bombing phase

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [phase, setPhase] = useState(0);
  const [players, setPlayers] = useState([
    {
      name: "Player 1",
      hits: 0,
      shots: 0
    },
    {
      name: "Player 2",
      hits: 0,
      shots: 0
    }
  ]);

  const [boards, setBoards] = useState({
    0: new Array(25).fill(EMPTY),
    1: new Array(25).fill(EMPTY)
  });

  const handleBoxClicked = index => {
    // Placement phase
    const currentBoard = [...boards[currentPlayer]];
    if (phase === 0) {
      // 1. Check contents of box
      if (currentBoard[index] === SHIP) {
        currentBoard[index] = EMPTY;
      } else if (
        currentBoard.filter(item => item === SHIP).length === SHIP_LIMIT
      ) {
        // Felmeddelade
      } else {
        currentBoard[index] = SHIP;
      }
      setBoards(prevBoards => ({
        [1 - currentPlayer]: [...prevBoards[1 - currentPlayer]],
        [currentPlayer]: currentBoard
      }));
      // Bombing pahse
    } else {
    }
  };

  return (
    <div className="main-container">
      <PlayerPane {...players[0]} isCurrent={currentPlayer === 0} />
      <Board
        board={boards[currentPlayer]}
        handleBoxClicked={handleBoxClicked}
      />
      <PlayerPane {...players[1]} isCurrent={currentPlayer === 1} />
    </div>
  );
};

export default App;
