import React, {useState} from 'react'
import Meeple from './Meeple'

const Player = ({player, gameState, selectMeeple}) => {
  const [tempSelected, setTempSelected] = useState(false)
  
  return (
    <div className='player' style={{border: player.name === gameState.currentPlayer.name && `0.4rem solid ${player.color}`}}>
      <h6>{player.name}</h6>
      <div className="meeples">
        {player.meeples.map(meeple => (
          <Meeple
            key={meeple.id} 
            players={gameState.players} 
            currentPlayer={gameState.currentPlayer}
            player={player}
            phase={gameState.phase}
            meeple={meeple}
            temp={tempSelected}
            setTemp={setTempSelected}
            selectMeeple={selectMeeple}
          />))}
      </div>
    </div>
  )
}

export default Player
