import React from 'react'
import './HeaderDetail_Coach.css'
import hagl from '../images/hagl.png'
import kiatisuk from '../images/Kiatisuk.png'


export default function Header() {
  return (
    <div className='header_detailcoach'>
    <div className='img1'>
        <img src={hagl} alt='hagl' style={{paddingTop:'100px'}} width='60px' height='170px' className='img' />
    </div>
    <div className='img2'>
        <img src={kiatisuk} alt='cp' width='300px' height='180px' className='img' />
    </div>
    <div className='info'>
        <p>Kiatisuk Senamuang</p>
        <p className='detail_coach_role'>Huấn luyện viên trưởng</p>
    </div>
    </div>
  )
}
