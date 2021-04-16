import React, { useState} from 'react'

const CellMeeple = ({i, p, phase, selectedMeeple, placeMeeple, currentCell, setTemp, temp, meeple, selectMeeple, removeMeeple, cell, currentPlayer}) => {

  const [onHover, setOnHover] = useState(false)
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    if(!temp) {
      setSelected(true)
      setTemp(true)
    }
    if(temp && selected) {
      setSelected(false)
      setTemp(false)
    }
    if(temp && !selected) {
      return
    }
  }
  
  const handleSelectMeeple = () => {
    setSelected(!selected)
    selectMeeple(p)
  }

  const handlePlaceMeeple = (e) => {
    e.preventDefault()
    e.stopPropagation()
    placeMeeple(selectedMeeple, p)
    setSelected(false)
  }
  const handleRemoveMeeple = (e) => {
    e.preventDefault()
    e.stopPropagation()
    removeMeeple(selectedMeeple, cell)
    setSelected(false)
  }
  return (
    <div 
      className={`p p${i}`}
      onMouseEnter={phase === 'placeMeeple' && currentCell? () => setOnHover(true) : null}
      onMouseLeave={phase === 'placeMeeple' && currentCell? () => setOnHover(false) : null}
      style={{backgroundImage: (!temp && onHover) || selected ? `url(${selectedMeeple?.img})`: p?.img ? `url(${p.img})` : ''}}
      onClick={phase === 'placeMeeple' && currentCell && selectedMeeple?.img ? handleClick : phase === 'removeMeeple' && p.img ? () => handleSelectMeeple(p) : null}
    >
    {phase === 'placeMeeple' && selected && <button style={{background: `${currentPlayer.color}`}}onClick={handlePlaceMeeple} className='btn-place-meeple'>Place Meeple</button>}
    {phase === 'removeMeeple' && selected && <button style={{background: `${currentPlayer.color}`}}onClick={handleRemoveMeeple} className='btn-remove-meeple'>Remove Meeple</button>}
    </div>
  )
}

export default CellMeeple
