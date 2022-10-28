import React from 'react'
import { FaCaretDown} from 'react-icons/fa'
import { FiRotateCcw} from 'react-icons/fi'
import './Coach.css'


export default function Coachs() {
  return (
    <div>
      <div className='filter'>
        <div className='filter-seasons'>
            <p className='txt-filter1'>Mùa giải </p>
            <p className='txt-filter2'>2022 <FaCaretDown/> </p>
        </div>
        <div className='filter-clubs'>
            <p className='txt-filter1'>Câu lạc bộ </p>
            <p className='txt-filter2'>Tất cả <FaCaretDown/> </p>
        </div>
        <div className='filter-return'>
           <p id='return'> <FiRotateCcw size={26}/> Khôi phục mặc định </p>
        </div>
      </div>
      <div className='header-list'>
        <p id='title1'>Huấn luyện viên</p>
        <p id='title2'>Câu lạc bộ</p>
        <p id='title3'>Quốc tịch</p>
      </div>
    </div>
    
  )
}
