import React, { useEffect, useState } from 'react'
import './ContentCoach.css'
import { TbMinusVertical} from 'react-icons/tb'
import { useLocation } from 'react-router-dom'


export default function ContentCoach() {
    const location = useLocation();
    const [coach,] = useState(location.state.coach);
  return (
    <div className='content1'>
        <div className='information1'>
            <p className='styletitle2'>Thông tin cá nhân</p>
            <div className='person1'>
                <p className='quoctich1'>Quốc tịch</p>
                <p className='noidung1'>{coach.QUOCTICH}</p>
                <p className='pipe1'><TbMinusVertical size={25}/></p>
                <p className='quoctich1'>Ngày sinh</p>
                <p className='noidung1'>{coach.NGAYSINH}</p>
                <p className='pipe1'><TbMinusVertical size={25}/></p>
                <p className='quoctich1'>Ngày tham gia câu lạc bộ</p>
                <p className='noidung1'>{coach.NGAYTHAMGIA}</p>
            </div>
        </div>
    </div>
  )
}
