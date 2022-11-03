import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './Coach.css'


export default function Coachs() {
  return (
    <div>
      <div className='filter_coach'>
        <p className='filter_coach_textarea'>a</p>
        <FaSearch className='filter_coach_icon' size={28}/>
      </div>
      <div className='header-list_coach'>
        <p id='title1_coach'>Huấn luyện viên</p>
        <p id='title2_coach'>Câu lạc bộ</p>
        <p id='title3_coach'>Quốc tịch</p>
      </div>
    </div>
    
  )
}
