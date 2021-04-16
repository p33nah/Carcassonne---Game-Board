import React, {useState} from 'react'
import Cell from './Cell'

const Board = ({gameState, setGameState, selectMeeple}) => {

  const [tempSelected, setTempSelected] = useState(false)
  
  const placeTile = (id, borders, img) => {
    const top = id - 20;
    const bottom = id + 20;
    const right = id + 1;
    const left = id - 1;
    setGameState(prev => {
      const newBoard = prev.board.map(cell => {
        const cellBorders = cell.borders
        if (cell.id === id) {
          return {
            ...cell,
            value: 1,
            borders: borders,
            img: img
          };
        }
        if ((cell.id === top && cell.value !== 1) || undefined) {
          
          return {
            ...cell,
            borders: [
              ...cellBorders.slice(0, 2),
              borders[0],
              ...cellBorders.slice(3)
            ]
          };
        }
        if ((cell.id === left && cell.value !== 1) || undefined) {
          
          return {
            ...cell,
            borders: [
              ...cellBorders.slice(0, 1),
              borders[3],
              ...cellBorders.slice(2)
            ]
          };
        }
        if ((cell.id === right && cell.value !== 1) || undefined) {
          
          return {
            ...cell,
            borders: [...cellBorders.slice(0, 3), borders[1]]
          };
        }
        if ((cell.id === bottom && cell.value !== 1) || undefined) {
          
          return {
            ...cell,
            borders: [borders[2], ...cellBorders.slice(1)]
          };
        } else {
          return cell;
        }
      });
      return {
        ...prev,
        board: newBoard,
        phase: 'placeMeeple',
        currentCell: newBoard[id]
      };
    });
  };
  const placeMeeple = (meeple, pos) => {
    const {id, img, player} = meeple;
    setGameState(prev => {
      const newBoard = prev.board.map(cell => {
        if (cell.id === prev.currentCell.id) {
          const newPosition = cell.positions.map((p) => {
            if( p.id === pos.id) {
              return {
                ...p,
                id: id,
                img: img,
                player: player
              }
            } else {
              return p
            }
          })
          return {
            ...cell,
            positions: newPosition,
            meeple: true
          };
        } else {
          return cell;
        }
      });
      const newMeeples = prev.players.map(p => {
        if(p.name !== player) {
          return p
        }
        return {
          ...p,
          meeples: p.meeples.filter(m => m.id !== prev.selectedMeeple.id)
        }
      })
      return {
        ...prev,
        board: newBoard,
        players: newMeeples,
        phase: 'removeMeeple',
        selectedMeeple: {}
      };
    });
  }
  const removeMeeple = (meeple, cellMeeple) => {
    const {id, img, player} = meeple;
    setGameState(prev => {
      const newBoard = prev.board.map(cell => {
        if (cell.id === cellMeeple.id) {
          const newPosition = cell.positions.map((p,i) => ({ ...p,id: `p${i}`, img: '', player: ''}))
          return {
            ...cell,
            positions: newPosition,
            meeple: false
          };
        } else {
          return cell;
        }
      });
      const newMeeples = prev.players.map((p) => {
        if(p.name === player) {
          return {
            ...p,
            meeples: [...p.meeples, {id: id, img: img, player: player}]
          }
        } else {
          return p
        }
      })
     
      return {
        ...prev,
        board: newBoard,
        players: newMeeples,
        selectedMeeple: {},
      };
    });
  }

  return (
    <div className="grid">
        {gameState.board.map(cell => (
          <Cell
            key={cell.id}
            cell={cell}
            tempSelected={tempSelected}
            setTempSelected={setTempSelected}
            placeTile={placeTile}
            placeMeeple={placeMeeple}
            removeMeeple={removeMeeple}
            selectMeeple={selectMeeple}
            isPlaced={gameState.placedTiles.includes(cell)}
            isValid={gameState.emptyCells.includes(cell)}
            gameState={gameState}
          />
        ))}
      </div>
  )
}

export default Board
