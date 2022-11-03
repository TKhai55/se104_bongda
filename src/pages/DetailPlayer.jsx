import React from 'react'
import './styles/DetailPlayer.css'
import Header from './DetailPlayer/Header'
import ContentPlayer from './DetailPlayer/ContentPlayer'


export default function DetailPlayer() {
  return (
    <div className='body'>
      <Header/>
      <ContentPlayer/>
    </div>
  )
}
