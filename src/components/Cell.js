import React, {useEffect, useState} from 'react'
import {checkRotation, rightShift} from '../utils'
import Grid from './Grid';

const Cell = ({ cell, gameState, isValid, isPlaced, setTempSelected, tempSelected, placeTile, placeMeeple, selectMeeple, removeMeeple }) => {
  const {id, value, borders, positions, img, meeple} = cell;
  const {currentPlayer, currentTile, currentCell, selectedMeeple, phase} = gameState;
  const [onHover, setOnHover] = useState(false)
  const [tempBorders, setTempBorders] = useState([]);
  const [deg, setDeg] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const i = checkRotation(borders, currentTile.borders);
    setDeg(90 * i);
    setTempBorders(rightShift(currentTile.borders, i));
  }, [currentTile, borders]);

  const handleSelect = () => {
    if(!tempSelected) {
      setSelected(true)
      setTempSelected(true)
    }
    if(tempSelected && selected) {
      setSelected(false)
      setTempSelected(false)
    }
    if(tempSelected && !selected) {
      return
    }
  }

  const rotate = e => {
    e.preventDefault();
    e.stopPropagation();
    if (value !== 0) {
      return;
    }
    setDeg(prev => prev += 90);
    setTempBorders(prev => rightShift(prev, 1));
  };

  const handlePlaceTile = (e) => {
    placeTile(id, tempBorders, currentTile.img)
    setSelected(false)
  }

  return (
    <div
      onMouseEnter={phase === 'position' ? () => setOnHover(true) : null}
      onMouseLeave={phase === 'position' ? () => setOnHover(false) : null}
      onClick={phase ==='position' && isValid ? handleSelect : null}
      className='cell'
      style={{ background: phase ==='position' && isValid && "black", opacity: isValid && !selected && !onHover && '0.2'}}
    >
      <div
        className="img"
        style={{ transform: `rotate(${deg}deg)`, backgroundImage: (onHover && isValid) || selected ? `url('tile-images/${currentTile.img}')` : isPlaced && `url('tile-images/${img}')`}}
      />

      {phase !== 'placeMeeple' && selected && 
        <div 
          className="btn-rotate"
          onClick={rotate}
          style={{backgroundImage: `url('rotate.png')`}}
        />
      }

      {phase==='position' && selected && isValid && (
        <button style={{background: `${currentPlayer.color}`}}onClick={handlePlaceTile} className="btn-place">
          place tile
        </button>
      )}

      <Grid
        meeple={meeple}
        positions={positions}
        currentCell={currentCell.id === id}
        phase={phase}
        selectedMeeple={selectedMeeple}
        placeMeeple={placeMeeple}
        selectMeeple={selectMeeple}
        removeMeeple={removeMeeple}
        cell={cell}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}

export default Cell
