import React from 'react'
import './Ranking.css'

const club = [
    {
        id: 0,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5b/H%C3%A0_N%E1%BB%99i_FC_2020.svg/1200px-H%C3%A0_N%E1%BB%99i_FC_2020.svg.png',
        team: 'Hà Nội',
        fought: 5,
        won: 5,
        draw: 0,
        lost: 0,
        score: 10,
        conceded: 4,
        difference: 6,
        point: 15
    },
    {
        id: 1,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/3/33/Dong_Thap_FC.png',
        team: 'Đồng Tháp',
        fought: 5,
        won: 4,
        draw: 1,
        lost: 0,
        score: 10,
        conceded: 5,
        difference: 5,
        point: 13
    },
    {
        id: 2,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png',
        team: 'Hoàng Anh Gia Lai',
        fought: 5,
        won: 4,
        draw: 1,
        lost: 0,
        score: 6,
        conceded: 4,
        difference: 2,
        point: 13
    },
    {
        id: 3,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png',
        team: 'Hải Phòng',
        fought: 5,
        won: 3,
        draw: 1,
        lost: 1,
        score: 10,
        conceded: 4,
        difference: 6,
        point: 10
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        team: 'Than Quảng Ninh',
        fought: 5,
        won: 2,
        draw: 2,
        lost: 1,
        score: 10,
        conceded: 4,
        difference: 6,
        point: 8
    }

]



const Ranking = () => {
    return (
        <div>
            <section className='Ranking'>
                <div className='ranking_table'>
                    <table className="club-information">
                        <tr className="club-information-header">
                            {/* <div className="stadium-information-header"> */}
                            <td>Câu lạc bộ</td>
                            <td className='normal'>Đã đá</td>
                            <td className='normal'>Thắng</td>
                            <td className='normal'>Hoà</td>
                            <td className='normal'>Thua</td>
                            <td className='normal'>Bàn thắng</td>
                            <td className='normal'>Bàn thua</td>
                            <td className='normal'>Hiệu số</td>
                            <td className='normal'>Điểm</td>

                            {/* <td></td> */}
                            {/* </div> */}
                        </tr>
                        {
                            club.map(club => {
                                return (
                                    <tr className='club-information-detail'>
                                        <div className='club-information-detail-wrapper'>
                                            <td><img src={club.logo} alt={club.name} className="team-logo" /></td>
                                            <td className='club-name'>{club.team}</td>
                                            <td className='club-fought'>{club.fought}</td>
                                            <td className='club-won'>{club.won}</td>
                                            <td className='club-draw'>{club.draw}</td>
                                            <td className='club-lost'>{club.lost}</td>
                                            <td className='club-score'>{club.score}</td>
                                            <td className='club-conceded'>{club.conceded}</td>
                                            <td className='club-difference'>{club.difference}</td>
                                            <td className='club-point'>{club.point}</td>
                                        </div>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>

            </section>
        </div>
    )
}

export default Ranking