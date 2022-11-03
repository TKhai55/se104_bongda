import React from 'react'
import "./Team.css";
import img_football_player from "./assests/image 14.png";
import img_nationality from "./assests/logo_quốc tịch.png";
import arrow_right from "./assests/arrow right.png";

const Team = () => {
    return (
        <div className='table_team'>
            <div className='football_player_card'>
                <div className='img_football_player'>
                    <div className='text_margin'>
                        <div className='sub_content'>10</div>
                        <div className='main_content'>Nguyễn Công Phượng</div>
                        <div className='sub_content'>Tiền đạo</div>
                    </div>
                    <img className='img_player' src={img_football_player} alt='' />
                </div>
                <div className='main_information'>
                    <div>Quốc tịch</div>
                    <div className='nationality_info'>
                        <img className='img_nationality' src={img_nationality} alt='' />
                        <div className='sub_content'>Việt Nam</div>
                    </div>
                </div>
                <hr/>
                <div className='main_information'>
                    <div>Bàn thắng</div>
                    <div>10</div>
                </div>
                <hr />
                <div className='detail_football_player'>
                    <div className='main_content'><u>Chi tiết cầu thủ</u></div> 
                    <img src={arrow_right} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Team