import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import "./index.css";
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((activePlayer) => (activePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevGameTurns) => [
      ...prevGameTurns,
      `Player ${activePlayer} selected row ${rowIndex + 1}, column ${
        colIndex + 1
      }`,
    ]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} className="player" />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} className="player" />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} />
      </div>
    </main>
  );
}

export default App;
