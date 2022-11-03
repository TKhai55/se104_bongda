import React from 'react'
import './ContentCoach.css'
import { TbMinusVertical} from 'react-icons/tb'


export default function ContentPlayer() {
  return (
    <div className='content1'>
        <div className='information1'>
            <p className='styletitle2'>Thông tin cá nhân</p>
            <div className='person1'>
                <p className='quoctich1'>Quốc tịch</p>
                <p className='noidung1'>Việt Nam</p>
                <p className='pipe1'><TbMinusVertical size={25}/></p>
                <p className='quoctich1'>Ngày sinh</p>
                <p className='noidung1'>26/01/1995</p>
                <p className='pipe1'><TbMinusVertical size={25}/></p>
                <p className='quoctich1'>Ngày tham gia câu lạc bộ</p>
                <p className='noidung1'>20/11/2020</p>
            </div>
        </div>
    </div>
  )
}
