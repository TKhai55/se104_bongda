import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './Players.css'


export default function Players() {
  return (
    <div>
      <div className='filter_player'>
        <p className='filter_player_textarea'>sa</p>
        <FaSearch className='filter_player_icon' size={28}/>
      </div>
      <div className='header-list_player'>
        <p id='title1_player'>Cầu thủ</p>
        <p id='title2_player'>Vị trí</p>
        <p id='title3_player'>Câu lạc bộ</p>
      </div>
    </div>
    
  )
}
