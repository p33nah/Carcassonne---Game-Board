
import React, { useState, useEffect } from "react";
import {getNewTile, findEmpty, valid} from './utils';
import Board from './components/Board';
import Player from './components/Player';
import "./App.css";

const tiles = [
  { borders: "gggg", img: "cloister.png" },
  { borders: "gggg", img: "cloister.png" },
  { borders: "gggg", img: "cloister.png" },
  { borders: "gggg", img: "cloister.png" },
  { borders: "ggrg", img: "cloisterr.png" },
  { borders: "ggrg", img: "cloisterr.png" },
  { borders: "cccc", img: "city4.png" },
  { borders: "ccgc", img: "city3.png" },
  { borders: "ccgc", img: "city3.png" },
  { borders: "ccgc", img: "city3.png" },
  { borders: "ccgc", img: "city3s.png" },
  { borders: "ccrc", img: "city3r.png" },
  { borders: "ccrc", img: "city3sr.png" },
  { borders: "ccrc", img: "city3sr.png" },
  { borders: "cggc", img: "city2nw.png" },
  { borders: "cggc", img: "city2nw.png" },
  { borders: "cggc", img: "city2nw.png" },
  { borders: "cggc", img: "city2nws.png" },
  { borders: "cggc", img: "city2nws.png" },
  { borders: "crrc", img: "city2nwr.png" },
  { borders: "crrc", img: "city2nwr.png" },
  { borders: "crrc", img: "city2nwr.png" },
  { borders: "crrc", img: "city2nwsr.png" },
  { borders: "crrc", img: "city2nwsr.png" },
  { borders: "gcgc", img: "city2we.png" },
  { borders: "gcgc", img: "city2wes.png" },
  { borders: "gcgc", img: "city2wes.png" },
  { borders: "ccgg", img: "city11ne.png" },
  { borders: "ccgg", img: "city11ne.png" },
  { borders: "gcgc", img: "city11we.png" },
  { borders: "gcgc", img: "city11we.png" },
  { borders: "gcgc", img: "city11we.png" },
  { borders: "cggg", img: "city1.png" },
  { borders: "cggg", img: "city1.png" },
  { borders: "cggg", img: "city1.png" },
  { borders: "cggg", img: "city1.png" },
  { borders: "cggg", img: "city1.png" },
  { borders: "cgrr", img: "city1rsw.png" },
  { borders: "cgrr", img: "city1rsw.png" },
  { borders: "cgrr", img: "city1rsw.png" },
  { borders: "crrg", img: "city1rse.png" },
  { borders: "crrg", img: "city1rse.png" },
  { borders: "crrg", img: "city1rse.png" },
  { borders: "crrr", img: "city1rswe.png" },
  { borders: "crrr", img: "city1rswe.png" },
  { borders: "crrr", img: "city1rswe.png" },
  { borders: "crgr", img: "city1rwe.png" },
  { borders: "crgr", img: "city1rwe.png" },
  { borders: "crgr", img: "city1rwe.png" },
  { borders: "crgr", img: "city1rwe.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "rgrg", img: "road2ns.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "ggrr", img: "road2sw.png" },
  { borders: "grrr", img: "road3.png" },
  { borders: "grrr", img: "road3.png" },
  { borders: "grrr", img: "road3.png" },
  { borders: "grrr", img: "road3.png" },
  { borders: "rrrr", img: "road4.png" }
].map((x, i) => ({ ...x, id: i, borders: x.borders.split("") }));

const board = new Array(400)
  .fill()
  .map((x, i) => ({
    id: i,
    value: 0,
    borders: [0, 0, 0, 0],
    positions: [0,0,0,0,0,0,0,0,0].map((m,i) => ({id: `p${i}`, img: '', player: ''})),
    img: "",
    meeple: false
  }))
  .map(cell => {
    if (cell.id === 189) {
      return {
        ...cell,
        value: 1,
        borders: ["c", "r", "g", "r"],
        img: "city1rwe.png"
      };
    }
    if (cell.id === 169) {
      return {
        ...cell,
        borders: [0, 0, "c", 0]
      };
    }
    if (cell.id === 190) {
      return {
        ...cell,
        borders: [0, 0, 0, "r"]
      };
    }
    if (cell.id === 209) {
      return {
        ...cell,
        borders: ["g", 0, 0, 0]
      };
    }
    if (cell.id === 188) {
      return {
        ...cell,
        borders: [0, "r", 0, 0]
      };
    } else {
      return cell;
    }
  });

const players = [{
  name: 'player 1',
  color: '#0b5394',
  meeples: [0,0,0,0,0,0,0].map((m,i) => ({id: `m${i}`, img: 'meeple-blue.png', player: 'player 1', color: 'blue'})),
}, {
  name: 'player 2',
  color: '#cc0000',
  meeples: [0,0,0,0,0,0,0].map((m,i) => ({id: `m${i}`, img: 'meeple-red.png', player: 'player 2', color: 'red'})),
}]

const initialState = {
  currentTile: getNewTile(tiles),
  tileSet: tiles,
  board: board,
  placedTiles: [],
  emptyCells: [],
  selectedMeeple: null,
  currentPlayer: players[0],
  currentCell: {},
  players: players,
  phases: ['position', 'placeMeeple', 'removeMeeple'],
  phase: 'position'
};

export default function App() {
  const [gameState, setGameState] = useState(initialState);
  
  useEffect(
    () => {
      setGameState(prev => {
        const placed = prev.board.filter(cell => cell.value === 1);
        const empty = findEmpty(placed, prev.board).filter(cell =>
          valid(cell, gameState.currentTile)
        );
        return {
          ...prev,
          placedTiles: placed,
          emptyCells: empty,
        };
      })
      },
    [gameState.board, gameState.currentTile]
  );
  
  const selectMeeple = (meeple) => {
    setGameState(prev => ({...prev, selectedMeeple: meeple}))
  }
  const endTurn = () => {
    setGameState(prev => {
      if(prev.tileSet.length === 0) {
        return {
          ...prev,
          phase: 'gameOver',
          tileSet: []
        }
      }
      const newTile = {...getNewTile(prev.tileSet)};
      const newTileSet = prev.tileSet.filter(tile => tile.id !== newTile.id)
      const changePlayer = prev.currentPlayer.name === 'player 1' ? {...prev.players[1]} : {...prev.players[0]}
      return {
        ...prev,
        currentTile: newTile,
        tileSet: newTileSet,
        currentPlayer: changePlayer,
        selectedMeeple: {},
        currentCell: {},
        phase: 'position'
      }
    })
  }
  const newTile = () => {
    setGameState(prev => ({...prev, currentTile: getNewTile(tiles)}))
  }
  const skipPlaceMeeplePhase = () => {
    setGameState(prev => ({...prev, phase: 'removeMeeple'}))
  }
  
  return (
    <div className='app'>
      {gameState.phase === 'gameOver' && (
        <div className="game-over">
          <h1>Game Over</h1>
        </div>
      )}
      {gameState.emptyCells.length === 0 && <button style={{background: `${gameState.currentPlayer.color}`}} onClick={newTile}>New Tile</button>}
      {gameState.phase !== 'position' && <button style={{background: `${gameState.currentPlayer.color}`}} className='btn-end' onClick={endTurn}>end turn</button>}
      {gameState.phase === 'placeMeeple' && <button style={{background: `${gameState.currentPlayer.color}`}} className='btn-skip' onClick={skipPlaceMeeplePhase}>Next Phase</button>}
      <div className="current-tile-container">
        <h4>{gameState.tileSet.length}</h4>
        <img style={{border: `0.4rem solid ${gameState.currentPlayer.color}`}} className='current-tile' alt='tile' src={`tile-images/${gameState.currentTile.img}`}/>
      </div>
      <Board gameState={gameState} setGameState={setGameState} selectMeeple={selectMeeple}/>
      <div className="players">
      {gameState.players.map(player => <Player key={player.name} player={player} gameState={gameState} setGameState={setGameState} selectMeeple={selectMeeple}/>)}
      </div>
    </div>
  );
}
