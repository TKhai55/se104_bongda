import React from 'react'
import './HeaderDetail_Player.css'
import cp from '../images/image 10.png'
import hagl from '../images/hagl.png'


export default function Header() {
  return (
    <div className='header_detailplayer'>
      <div className='img1'>
          <img src={hagl} alt='hagl' style={{paddingTop:'100px'}} width='60px' height='170px' className='img' />
      </div>
      <div className='img2'>
          <img src={cp} alt='cp' width='300px' height='180px' className='img' />
      </div>
      <div className='info'>
          <p>Nguyễn Công Phượng</p>
          <p className='detail_player_role'>Tiền đạo</p>
      </div>
      <div className='numberbig'>
          <p>10</p>
      </div>
    </div>
  )
}
