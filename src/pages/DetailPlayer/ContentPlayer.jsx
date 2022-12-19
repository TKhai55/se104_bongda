import React, { useEffect, useState } from 'react'
import './ContentPlayer.css'
import { TbMinusVertical} from 'react-icons/tb'
import { useLocation } from 'react-router-dom';
import axios from 'axios';


export default function ContentPlayer() {
    const location = useLocation();
    const [player,] = useState(location.state.player);
    let [caulacbos, setCauLacBo] = useState([])
  const getCLB = async () => {
      try {
          const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo/')
          setCauLacBo(res.data)
          caulacbos=res.data;
      }
      catch (error) {
          console.log(error.message)
      }
  }
  useEffect(() => {
      getCLB()
  }, [])

  let [nameclub,] = useState()
  const find = (e) =>{
      for (let i = 0; i < caulacbos.length; i++) {
          if (e === caulacbos[i]._id) nameclub = caulacbos[i].TENCLB
      }
  }
    console.log("cauthu",player)
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
                    <p style={{paddingTop:'10px'}}>{player.SOBANTHANG}</p>
                    <p style={{paddingTop:'10px'}}>{player.SOTHEDO}</p>
                    <p style={{paddingTop:'10px'}}>{player.SOTHEVANG}</p>
                </div>
            </div>
        </div>
        <div className='information'>
            <p className='styletitle'>Thông tin cá nhân</p>
            <div className='person'>
                <p className='quoctich'>Quốc tịch</p>
                <p className='noidung'>{player.QUOCTICH}</p>
                <p className='pipe'><TbMinusVertical size={25}/></p>
                <p className='quoctich'>Ngày sinh</p>
                <p className='noidung'>{player.NGAYSINH}</p>
                <p className='pipe'><TbMinusVertical size={25}/></p>
                { find(player.MACLB)}
                <p className='quoctich'>Câu lạc bộ</p>
                <p className='noidung1'>{nameclub}</p>
            </div>
        </div>
    </div>
  )
}
