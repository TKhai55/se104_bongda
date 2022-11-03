import React from 'react';
import "./Schedule.css";
import img_team1 from "./assests/hagl1.png";
import img_team2 from "./assests/hp.png";

const Schedule = () => {
    return (
        <div className='table_schedule'>
            <div className='schedule'>
            <div className='team'>
                <img src={img_team1} alt='' />
                <div className='text_team'>Hoàng Anh Gia Lai</div>
            </div>
            <div className='time'>
                <div className='date'>13/11</div>
                <div className='hour'>17:00</div>
            </div>
            <div className='team'>
                <img src={img_team2} alt='' />
                <div className='text_team'>Hải Phòng</div>
            </div>
            </div>
        </div>
    )
}

export default Schedule;