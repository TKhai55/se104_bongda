import React from 'react'
import './ContentPlayer.css'
import { TbMinusVertical} from 'react-icons/tb'


export default function ContentPlayer() {
  return (
    <div className='content'>
        <div className='presentSeason'>
            <p id='titleSeason'> Mùa giải hiện tại</p>
            <div className='contentSeason'>
                <div className='index'>
                    <p style={{paddingTop:'10px'}}>Bàn thắng</p>
                    <p style={{paddingTop:'10px'}}>Thẻ vàng</p>
                    <p style={{paddingTop:'10px'}}>Thẻ đỏ</p>

                </div>
                <div className='quantity'>
                    <p style={{paddingTop:'10px'}}>10</p>
                    <p style={{paddingTop:'10px'}}>1</p>
                    <p style={{paddingTop:'10px'}}>0</p>
                </div>
            </div>
        </div>
        <div className='information'>
            <p className='styletitle'>Thông tin cá nhân</p>
            <div className='person'>
                <p className='quoctich'>Quốc tịch</p>
                <p className='noidung'>Việt Nam</p>
                <p className='pipe'><TbMinusVertical size={25}/></p>
                <p className='quoctich'>Ngày sinh</p>
                <p className='noidung'>26/01/1995</p>
                <p className='pipe'><TbMinusVertical size={25}/></p>
                <p className='quoctich'>Chiều cao</p>
                <p className='noidung'>168cm</p>
            </div>
        </div>
    </div>
  )
}
