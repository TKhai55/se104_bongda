import React from 'react'
import './PlayerCard1.css'

export const PlayerCard1 = (props) => {
  return (
    <div className='player-card-main-wrapper'>
        <div className='player-card-information'>
            <h4 className='player-name'>{props.name}</h4>
            <h5 className='player-nationality'>{props.nationality}</h5>
        </div>
        <div className="player-card-image">
            <img className='player-image' src={props.image} alt="" />
            <h4 className='player-number'>{props.number}</h4>
        </div>
    </div>
  )
}
