import React from 'react'
import './Club1.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const stadiums = [
    {
        id: 0,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5b/H%C3%A0_N%E1%BB%99i_FC_2020.svg/1200px-H%C3%A0_N%E1%BB%99i_FC_2020.svg.png',
        name: 'Sân vận động Mỹ Đình',
        team: 'Câu lạc bộ Hà Nội'
    },
    {
        id: 1,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/3/33/Dong_Thap_FC.png',
        name: 'Sân vận động Cao Lãnh',
        team: 'Câu lạc bộ Đồng Tháp'
    },
    {
        id: 2,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png',
        name: 'Sân vận động Pleiku',
        team: 'Câu lạc bộ Hoàng Anh Gia Lai'
    },
    {
        id: 3,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png',
        name: 'Sân vận động Lạch Tray',
        team: 'Câu lạc bộ Hải Phòng'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Sân vận động Cẩm Phả',
        team: 'Câu lạc bộ Than Quảng Ninh'
    }
]

const Club = () => {
    return (
        <div className='club-main-wrapper'>
            <div className="search-bar-wrapper">
                <div className="search-bar">
                    <input className="search-area" type="text" placeholder='Nhập tên câu lạc bộ muốn tìm'/>
                    <button className="search-btn"></button>
                </div>
            </div>
            <div >
                <table className="stadium-information">
                    <tr className="stadium-information-header">
                            <td>Câu lạc bộ</td>
                            <td>Sân vận động</td>
                    </tr>
                    {
                        stadiums.map(stadium => {
                            return (
                                <Link to='/club/detailclub'>
                                    <tr className='stadium-information-detail'>
                                        <div className='stadium-information-detail-wrapper'>
                                            <td><img src={stadium.logo} alt={stadium.name} className="team-logo"/></td>
                                            <td className='team-name'>{stadium.team}</td>
                                            <td className='stadium-name'>{stadium.name}</td>
                                            <td className='showmore-button'>Chi tiết <FontAwesomeIcon icon={faChevronRight}/></td>
                                        </div>
                                    </tr>
                                </Link>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Club