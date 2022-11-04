import React from 'react'
import './Players.css'


export default function Players() {
  return (
    <div>
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <input className="search-area" type="text" placeholder='Nhập tên câu lạc bộ muốn tìm'/>
          <button className="search-btn"></button>
        </div>
      </div>
      <div className='header-list_player'>
        <p id='title1_player'>Cầu thủ</p>
        <p id='title2_player'>Vị trí</p>
        <p id='title3_player'>Câu lạc bộ</p>
      </div>
    </div>
    
  )
}
