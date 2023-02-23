import React from 'react'
import './ListCard.css'

export function ListCard({index, cardData}) {

  return (
    <div className='card' key={cardData.animeTitle+index}>
        <div className="card-sec" key={"card-sec"+index}>
            <img src={cardData.animeImg} alt={cardData.animeId} />
            <h5>{cardData.animeTitle}</h5>
        </div>
        <p key={"p"+index}>{`Episode-${cardData.episodeNum}`}</p>
    </div>
  )
}
