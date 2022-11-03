import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.svg";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"




const Header = () => {
  return (
    <header >
      <div className='header d_flex' >
        <div className="logo" >
          <img className='mainlogo' src={logo} alt="logo" />
        </div>
        <nav>
          <NavLink className='Nav' to='/' >Trang chủ</NavLink>
          <NavLink className='subNav' to='/fixtures' >Lịch thi đấu</NavLink>
          <NavLink className='subNav' to='/results' >Kết quả</NavLink>
          <NavLink className='subNav' to='/ranking' >Bảng xếp hạng</NavLink>
          <NavLink className='subNav' to='/club' >Câu lạc bộ</NavLink>
          <NavLink className='subNav' to='/player' >Cầu thủ</NavLink>
          <NavLink className='subNav' to='/coach' >Huấn luyện viên</NavLink>
        </nav>
        <div className="button_user">
          <button className='user'>
            <NavLink className='Nav' to='/signin' >
              <FontAwesomeIcon icon={faUser} className='user_button'></FontAwesomeIcon></NavLink>

          </button>
        </div>
      </div>
    </header>
  )
}

export default Header