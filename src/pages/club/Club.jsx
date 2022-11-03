import React,{useState} from 'react'
import "./Club.css";
import logo_club from "./assests/logo_clb.png";
import img_stadium from "./assests/svd.png";
import Overview from './Overview';
import Team from './Team';
import Schedule from './Schedule';
import Result from './Result';

const Club = () => {
    const [active,setActive] = useState('overview');
    return (
        <div className='container'>
            <div className='introduction_club'>
                <img className='logo_club' src={logo_club} alt=''/>
                <div className='title'>
                    <div className='name_club'>Hoàng Anh Gia Lai</div>
                    <div className='name_stadium'>1975</div>
                    <div className='name_stadium'>Sân vận động Pleiku</div>
                </div>
                <div className='img_stadium'>
                    <img src={img_stadium} alt='' />
                </div>
            </div>
            <div className='button_group'>
                <div className='button' onClick={()=> setActive('overview')}>
                    Tổng quan
                </div>
                <div className='button' onClick={() => setActive('team')}>
                    Đội hình
                </div>
                <div className='button' onClick={() => setActive('schedule')}>
                    Lịch thi đấu
                </div>
                <div className='button' onClick={() => setActive('result')}>
                    Kết quả
                </div>
            </div>
            <div>
                {active ==='overview' && <Overview/>}
                {active === 'team' && <Team />}
                {active === 'schedule' && <Schedule/>}
                {active === 'result' && <Result />}
            </div>
        </div>
    )
}

export default Club;