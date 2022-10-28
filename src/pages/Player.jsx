import React from 'react'
import './styles/Player.css'
import DetailPlayer from './FootballPLayer/DetailPlayer'
import Players from './FootballPLayer/Players'


const Player = () => {
    return (
        <div className='body'>
            <Players/>
            <div className='headerPlayer'></div>
            <div>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
                <DetailPlayer/>
            </div>
        </div>
    )
}

export default Player