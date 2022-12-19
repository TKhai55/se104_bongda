import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Header.css'



export default function Header() {
  const location = useLocation();
  const [player,] = useState(location.state.player);
  
  return (
    <div className='header_detailplayer'>
      <div className='img2'>
          <img src={'http://localhost:8000/'+player.AVATAR} alt='cp' width='300px' height='180px' className='img' />
      </div>
      <div className='info'>
        <p>{player.HOTEN}</p>
        <p className='detail_player_role'>{player.VITRI}</p>
      </div>
      <div className='numberbig'>
        <p>{player.SOAO}</p>
      </div>
    </div>
  )
}
