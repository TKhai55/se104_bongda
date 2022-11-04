import React from 'react'
import './DetailPlayer.css'
import cp from '../images/image 10.png'
import { Link } from 'react-router-dom'

export default function DetailPlayer() {
  return (
    <div>
        <Link to='/player/detailplayer'>
          <div className='list-Player'>
              <img src={cp} alt='a' width={118.15} height={80}/>
              <p className='name'>  Nguyễn Công Phượng</p>
              <p className='position'>Tiền Đạo</p>
              <p className='club'>Hoàng Anh Gia Lai</p>
              <br/>
          </div>
        </Link>
    </div>
    
  )
}
