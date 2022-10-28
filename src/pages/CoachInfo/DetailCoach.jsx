import React from 'react'
import './DetailCoach.css'
import Kiatisuk from './images/Kiatisuk.png'

export default function DetailCoach() {
  return (
    <div>
        <div className='list-Player'>
            <img src={Kiatisuk} alt='a' width={118.15} height={80}/>
            <p className='name'>  Nguyễn Công Phượng</p>
            <p className='club'>Hoàng Anh Gia Lai</p>
            <p className='country'>Thái Lan</p>
            <br/>
        </div>   
    </div>
    
  )
}
