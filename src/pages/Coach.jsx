import React from 'react'
import './styles/Coach.css'
import DetailCoach from './CoachInfo/DetailCoach'
import Coachs from './CoachInfo/Coachs'


const Coach = () => {
    return (
        <div className='body'>
            <Coachs/>
            <div className='headerPlayer'></div>
            <div>
                <DetailCoach/>
                <DetailCoach/>
                <DetailCoach/>
                <DetailCoach/>
                <DetailCoach/>
            </div>
        </div>
    )
}

export default Coach