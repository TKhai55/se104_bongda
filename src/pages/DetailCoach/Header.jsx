import React, { useEffect, useState } from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const location = useLocation();
  const [coach,] = useState(location.state.coach);
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
  return (
    <div className='header_detailcoach'>
    <div className='img2'>
        <img src={'http://localhost:8000/'+coach.AVATAR} alt={coach.HOTEN} width='300px' height='180px' className='img' />
    </div>
    <div className='info'>
    { find(coach.MACLB)}
      <p className='nameclub'>{nameclub}</p>
      <p>{coach.HOTEN}</p>
      <p className='detail_coach_role'>{coach.LOAI}</p>
    </div>
    </div>
  )
}
