import React from 'react'
import './styles/Player.css'
import DetailPlayer from './FootballPLayer/DetailPlayer'
import Players from './FootballPLayer/Players'
import {Link} from 'react-router-dom'


const Player = () => {
    return (
        <div className='player_body'>
            <Players/>
            <div className='player_cnt'>
                <Link to="/player/DetailPlayer"><DetailPlayer className='player_detail_player'/></Link>
                <Link to="/player/DetailPlayer"><DetailPlayer className='player_detail_player'/></Link>
            </div>
        </div>
    )
}

export default Player