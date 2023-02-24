import React from 'react'
import './OtherList.css'
import {BsFillPlayFill} from 'react-icons/bs'

export function OtherList({index, cardData}) {
  return (
    <div className='card-1' key={cardData.animeTitle+index}>
        <div className="card-sec-1" key={"card-sec-1"+index}>
            <img src={cardData.animeImg} alt={cardData.animeId} />
            <h5>{cardData.animeTitle}</h5>
        </div>
        <div className="play-btn"><BsFillPlayFill style={{fontSize:"2rem"}}/></div>
    </div>
  )
}
