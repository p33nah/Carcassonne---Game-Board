import React, {useState, useEffect} from 'react'

const Meeple = ({meeple, temp, setTemp, selectMeeple, players, phase, currentPlayer, player}) => {

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(false)
    setTemp(false)
  }, [players, currentPlayer, setTemp])

  const handleClick = () => {
    if(!temp) {
      setSelected(true)
      setTemp(true)
      selectMeeple(meeple)
    }
    if(temp && selected) {
      setSelected(false)
      setTemp(false)
      selectMeeple({})
    }
    if(temp && !selected) {
      return
    }
  }

  return (
    <div onClick={phase === 'placeMeeple' && player.name === currentPlayer.name ? handleClick : null}>
      <img style={{transform: selected && 'scale(1.2)'}} className={`meeple`} src={meeple.img} alt="meeple"/>
    </div>
  )
}

export default Meeple
