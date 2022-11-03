import React from 'react'
import './PlayerCard2.css'

export const PlayerCard2 = (props) => {
  return (
    <div className='player-card-main-wrapper-2'>
        <div className="player-card-image">
            <h4 className='player-number'>{props.number}</h4>
            <img className='player-image' src={props.image} alt="" />
        </div>

        <div className='player-card-information'>
            <h4 className='player-name'>{props.name}</h4>
            <h5 className='player-nationality'>{props.nationality}</h5>
        </div>
    </div>
  )
}
