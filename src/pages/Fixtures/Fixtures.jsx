import React from 'react'
import './Fixtures.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'

const rounds = ['Vòng 1', 'Vòng 2', 'Vòng 3', 'Vòng 4', 'Vòng 5', 'Vòng 6', 'Vòng 7', 'Vòng 8', 'Vòng 9', 'Vòng 10', 'Vòng 11', 'Vòng 12', 'Vòng 13', 'Vòng 14', 'Vòng 15', 'Vòng 16', 'Vòng 17', 'Vòng 18', 'Vòng 19', 'Vòng 20', 'Vòng 21', 'Vòng 22', 'Vòng 23', 'Vòng 24', 'Vòng 25', 'Vòng 26']


const Fixtures = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='fixture-main-wrapper'>
            <label htmlFor="rounds" id="round-select-label">Vòng đấu</label>
            <select name="rounds" id="round-select">
                <option value="0" selected>Tất cả</option>
                {
                    rounds.map((round) => {
                        return <option value={round}>{round}</option>
                    })
                }
            </select>
                {
                    rounds.map((round) => {
                        return (
                            <table className="round-table">
                                <tr>
                                    <th>{round} / {rounds.length}</th>
                                </tr>
                                <Link to='/fixtures/detailfixtures'>
                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr>
                                </Link>

                                <Link to='/fixtures/detailfixtures'>
                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr>
                                </Link>

                                <Link to='/fixtures/detailfixtures'>
                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr>
                                </Link>

                                <Link to='/fixtures/detailfixtures'>
                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr>
                                </Link>
                            </table>
                        )
                    })
                }

            {/* Back to top button */}
            {backToTopButton && 
            <div id="back-to-top" onClick={scrollUp}>
                <FontAwesomeIcon icon={faChevronUp}/>
            </div>}
        </div>
    )
}

export default Fixtures