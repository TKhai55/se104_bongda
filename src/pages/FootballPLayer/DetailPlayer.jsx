import React from 'react'
import './DetailPlayer.css'
import cp from './images/image 10.png'

export default function DetailPlayer() {
  return (
    <div>
        <div className='list-Player'>
            <img src={cp} alt='a' width={118.15} height={80}/>
            <p className='name'>  Nguyễn Công Phượng</p>
            <p className='position'>Tiền Đạo</p>
            <p className='club'>Hoàng Anh Gia Lai</p>
            <br/>
        </div>   
    </div>
    
  )
}
