import React, {useState} from 'react'
import CellMeeple from './CellMeeple'

const Grid = ({positions, currentPlayer, placeMeeple, currentCell, phase, selectedMeeple, meeple, selectMeeple, removeMeeple, cell}) => {
  const [tempSelected, setTempSelected] = useState(false)
  return (
    <div className="cell-grid">
      {positions.map((p, i) => (
        <CellMeeple
          key={i}
          i={i}
          p={p}
          currentCell={currentCell}
          phase={phase}
          selectedMeeple={selectedMeeple}
          placeMeeple={placeMeeple}
          temp={tempSelected}
          setTemp={setTempSelected}
          meeple={meeple}
          selectMeeple={selectMeeple}
          removeMeeple={removeMeeple}
          cell={cell}
          currentPlayer={currentPlayer}
        />))}
    </div>
  )
}

export default Grid
