import React from 'react'
import "./Result.css";
import img_team1 from "./assests/hagl1.png";
import img_team2 from "./assests/hp.png";

const Result = () => {
    return (
        <div className='table_result'>
            <div className='result'>
                <div className='team'>
                    <img src={img_team1} alt='' />
                    <div className='text_team'>Hoàng Anh Gia Lai</div>
                </div>
                <div className='score'>
                    2 - 0
                </div>
                <div className='team'>
                    <img src={img_team2} alt='' />
                    <div className='text_team'>Hải Phòng</div>
                </div>
            </div>
        </div>
    )
}

export default Result;