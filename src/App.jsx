import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameturns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameturns()
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName = "Player 1" symbol="X" isActive={activePlayer === 'X'} />
         <Player initialName = "Player 2" symbol="O"  isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
    </main>
  );
}

export default App;
