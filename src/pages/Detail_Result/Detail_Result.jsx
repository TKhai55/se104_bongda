import React from 'react'
import './Detail_Result.css'
import img from '../Detail_Result/sanpleiku.png'


const details = [
    {
        team1: 'Hoàng Anh Gia Lai',
        logo1: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png',
        team2: 'Hải Phòng',
        logo2: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png',
        time: '17/11/2022',
        stadium: 'Sân vận động Pleiku',
        score1: 2,
        score2: 1,

    }

]
const eventrs = [
    {
        name: 'Lê Công Vinh',
        clb: 'Hoàng Anh Gia Lai',
        status: 'Ghi bàn',
        timest: '10\'',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png'
    },
    {
        name: 'Nguyễn Công Phượng',
        clb: 'Hải Phòng',
        status: 'Thẻ vàng',
        timest: '20\'',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png'
    },
    {
        name: 'Reace Porte',
        clb: 'Hoàng Anh Gia Lai',
        status: 'Ghi bàn',
        timest: '30\'',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png'
    },
    {
        name: 'Reace Porte',
        clb: 'Hoàng Anh Gia Lai',
        status: 'Ghi bàn',
        timest: '40\'',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png'
    },
    {
        name: 'Reace Porte',
        clb: 'Hoàng Anh Gia Lai',
        status: 'Thẻ đỏ',
        timest: '45\'',
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png'
    }
]

const Detail_Result = () => {
    return (
        <div>
            <section className='dtresult'>
                <div className="resultboard">
                    <div className="image">
                        <img src={img} alt="abc" />
                        <div className="stadiumname">
                            <p>{
                                details.map(details => {
                                    return (String(details.time + " " + details.stadium + " ( " + details.team1 + " )"))
                                })
                            }</p>
                        </div>
                    </div>
                    <div className='club_vs'>
                        <div className="team1">
                            <div className="team_logo">
                                {
                                    details.map(details => {
                                        return (
                                            <img src={details.logo1} alt={details.team1} className="team_logo_img1" />
                                        )
                                    })
                                }
                            </div>
                            <div className='team_name1'>
                                <p>
                                    {
                                        details.map(details => {
                                            return (
                                                String(details.team1)
                                            )
                                        })
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="team2">
                            <div className='team_name2'>
                                <p>
                                    {
                                        details.map(details => {
                                            return (
                                                String(details.team2)
                                            )
                                        })
                                    }
                                </p>
                            </div>
                            <div className="team_logo">
                                {
                                    details.map(details => {
                                        return (
                                            <img src={details.logo2} alt={details.team2} className="team_logo_img2" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="score_vs">
                            <p>
                                {
                                    details.map(details => {
                                        return (
                                            String(details.score1)
                                        )
                                    })
                                }
                            </p>
                            <p className='space'>-</p>
                            <p>
                                {
                                    details.map(details => {
                                        return (
                                            String(details.score2)
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="scoreboard">
                    <table className='detail_score'>
                        {
                            eventrs.map(eventrs => {
                                return (
                                    <tbody>
                                        <tr>
                                            <th>{eventrs.timest}</th>
                                        </tr>
                                        <tr>
                                            <td className='stat'>
                                                <img src={eventrs.logo} alt="abc" />
                                            </td>
                                            <td className='timest'>{eventrs.name}</td>
                                            <td className='name'>{eventrs.status}</td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }

                    </table>
                </div>
            </section>
        </div>
    )
}

export default Detail_Result