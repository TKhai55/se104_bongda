import React from 'react'
import './Coach.css'
import DetailCoach from './DetailCoach'
import {Link} from 'react-router-dom'
import Coachs from './Coachs'


const Coach = () => {
    return (
        <div className='coach_body'>
            <Coachs/>
            <div className='coach_cnt'>
                <Link to="/coach/detailcoach"><DetailCoach className='coach_detail_coach'/></Link>
                <Link to="/coach/detailcoach"><DetailCoach className='coach_detail_coach'/></Link>
            </div>
        </div>
    )
}

export default Coach