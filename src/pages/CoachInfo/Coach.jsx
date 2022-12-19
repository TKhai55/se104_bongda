import React, { useEffect, useState } from 'react'
import './Coach.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";


const Coach = () => {
    const navigate= useNavigate();
    let [huanluyenviens, setHuanLuyenViens] = useState([])
    const getCT = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/huanluyenvien/gethuanluyenvien/')
            setHuanLuyenViens(res.data)
            huanluyenviens=res.data;
            console.log("cauthu",huanluyenviens)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT()
    }, [])

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
    const [query, setQuery] = useState('')

    return (
        <div className='club-main-wrapper'>
            <div className="search-bar-wrapper">
                <div className="search-bar">
                    <input className="search-area" type="text" placeholder='Nhập tên huấn luyện viên muốn tìm'
                        onChange={(e) => { setQuery(e.target.value.toLocaleLowerCase())}}
                    />
                    <button className="search-btn"></button>
                </div>
            </div>
            <div >
                <table className="coach-information">
                    <tr className="coach-information-header">
                            <td className='club_key'>Huấn luyện viên</td>
                            <td className='stadium_key'>Câu lạc bộ</td>
                            <td className='country_key'>Quốc tịch</td>
                    </tr>
                    {
                        huanluyenviens.filter((huanluyenviens) => query !== '' ?
                            huanluyenviens.HOTEN.toLowerCase().includes(query)
                            || huanluyenviens.LOAI.toLowerCase().includes(query)
                            : huanluyenviens).sort((a, b) => a._id > b._id ? -1 : 1).map(huanluyenviens => {
                            return (
                                <div className='a' onClick={() => {navigate(`/coach/detailcoach/${huanluyenviens._id}`,{
                                        state:{coach:huanluyenviens},   
                                    }); 
                                    }}>
                                    { find(huanluyenviens.MACLB)}
                                    <tr className='coach-information-detail'>
                                        <div className='coach-information-detail-wrapper'>
                                            <td><img src={'http://localhost:8000/'+huanluyenviens.AVATAR} alt={huanluyenviens.HOTEN} className="team-logo"/></td>
                                            <td className='coach-name'>{huanluyenviens.HOTEN}</td>
                                            <td className='team-name'>{nameclub}</td>
                                            <td className='coach-country'>{huanluyenviens.QUOCTICH}</td>
                                            <td className='showmore-button'>Chi tiết <FontAwesomeIcon icon={faChevronRight}/></td>
                                        </div>
                                    </tr>
                                </div>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Coach