import React from 'react'
import './styles/DetailCoach.css'
import Header from './DetailCoach/Header'
import ContentCoach from './DetailCoach/ContentCoach'


export default function DetailCoach() {
  return (
    <div className='body'>
      <Header/>
      <ContentCoach/>
    </div>
  )
}