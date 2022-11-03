import React from 'react'
import './styles/Coach.css'
import DetailCoach from './CoachInfo/DetailCoach'
import {Link} from 'react-router-dom'
import Coachs from './CoachInfo/Coachs'


const Coach = () => {
    return (
        <div className='coach_body'>
            <Coachs/>
            <div className='coach_cnt'>
                <Link to="/coach/DetailCoach"><DetailCoach className='coach_detail_coach'/></Link>
                <Link to="/coach/DetailCoach"><DetailCoach className='coach_detail_coach'/></Link>
            </div>
        </div>
    )
}

export default Coach