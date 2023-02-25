import React, { useContext } from 'react'
import './OtherList.css'
import { UserContextData } from '../../../App'

export function OtherList({index, cardData}) {
  const checkData = useContext(UserContextData);
  const parameter = checkData.parameter[0]
  return (
    <div className='card-1' key={parameter === "top-airing" ? cardData.title+index : cardData.animeTitle+index}>
        <div className="card-sec-1" key={"card-sec-1"+index}>
            <img src={parameter === "top-airing"?cardData.image : cardData.animeImg} alt={parameter === "top-airing"?cardData.id :cardData.animeId} />
            <h5>{parameter === "top-airing"?cardData.title : cardData.animeTitle}</h5>
        </div>
    </div>
  )
}
