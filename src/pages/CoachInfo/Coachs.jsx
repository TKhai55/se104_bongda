import React from 'react'
import './Coachs.css'


export default function Coachs() {
  return (
    <div>
      <div className="search-bar-wrapper">
        <div className="search-bar">
            <input className="search-area" type="text" placeholder='Nhập tên câu lạc bộ muốn tìm'/>
            <button className="search-btn"></button>
        </div>
      </div>
      <div className='header-list_coach'>
        <p id='title1_coach'>Huấn luyện viên</p>
        <p id='title2_coach'>Câu lạc bộ</p>
        <p id='title3_coach'>Quốc tịch</p>
      </div>
    </div>
    
  )
}
