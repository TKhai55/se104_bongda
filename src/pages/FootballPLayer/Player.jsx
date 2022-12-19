import React, { useEffect, useState } from 'react'
import './Player.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const PLayer = () => {
    const navigate= useNavigate();
    let [cauthus, setCauThus] = useState([])
    const getCT = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/getcauthu/')
            setCauThus(res.data)
            cauthus=res.data;
            console.log("cauthu",cauthus)
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
                    <input className="search-area" type="text" placeholder='Nhập tên cầu thủ muốn tìm' 
                        onChange={(e) => { setQuery(e.target.value.toLocaleLowerCase())}}/>
                    <button className="search-btn"></button>
                </div>
            </div>
            <div >
                <table className="player-information">
                    <tr className="player-information-header">
                            <td className='club_key'>Cầu thủ</td>
                            <td className='stadium_key'>Vị trí</td>
                            <td className='country_key'>Câu lạc bộ</td>
                    </tr>
                    {
                        cauthus.filter((cauthus) => query !== '' ?
                            cauthus.HOTEN.toLowerCase().includes(query)
                            || cauthus.VITRI.toLowerCase().includes(query)
                            : cauthus).sort((a, b) => a._id > b._id ? -1 : 1).map(cauthus => {
                            return (
                                <div className='a' onClick={() => {navigate(`/player/detailplayer/${cauthus._id}`,{
                                        state:{player:cauthus},   
                                    }); 
                                    }}>
                                    { find(cauthus.MACLB)}
                                    <tr className='player-information-detail'>
                                        <div className='player-information-detail-wrapper'>
                                            <td><img src={'http://localhost:8000/'+cauthus.AVATAR} alt={cauthus.HOTEN} className="team-logo"/></td>
                                            <td className='player-name'>{cauthus.HOTEN}</td>
                                            <td className='player-position'>{cauthus.VITRI}</td>
                                            <td className='team-name'>{nameclub}</td>
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

export default PLayer