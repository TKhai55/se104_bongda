import React from 'react'
import './Player.css'
import DetailPlayer from './DetailPlayer'
import Players from './Players'
import {Link} from 'react-router-dom'


const Player = () => {
    return (
        <div className='player_body'>
            <Players/>
            <div className='player_cnt'>
                <Link to="/player/detailplayer"><DetailPlayer className='player_detail_player'/></Link>
                <Link to="/player/petailplayer"><DetailPlayer className='player_detail_player'/></Link>
            </div>
        </div>
    )
}

export default Player