import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.svg";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
  return (
    <header >
      <div className='container d_flex' >
        <div className="logo" >
          <img className='mainlogo' src={logo} alt="logo" />
        </div>
        <nav>
          <Link to='/'>Trang chủ</Link>
          <Link to='/fixtures'>Lịch thi đấu</Link>
          <Link to='/results'>Kết quả</Link>
          <Link to='/ranking'>Bảng xếp hạng</Link>
          <Link to='/club'>Câu lạc bộ</Link>
          <Link to='/player'>Cầu thủ</Link>
          <Link to='/coach'>Huấn luyện viên</Link>
        </nav>
        <div className="button_user">
          <button className='user'>
            <FontAwesomeIcon icon={faUser} className='user_button'></FontAwesomeIcon>
          </button>
        </div>
        <div className="vertical_line"></div>
        <div className="button_user">
          <button className='user'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='user_button'></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header