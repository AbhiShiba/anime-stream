import React, { useContext } from 'react'
import { UserContextData } from '../../../App'
import { Loader } from '../../Loader/Loader';
import { ListCard } from '../ListCard/ListCard';
import './PlayList.css'

export function PlayList() {
    const data = useContext(UserContextData);
    const playData = data.Data
    const loader = data.load
    console.log(playData)
    const ListOfAnimes = (arr) => {
       return arr.map((list,index)=> {
            return <ListCard key={index} cardData={list}/>
        })
    }
  return (
    <div className='list-grid' key="animeData">
    {loader ? <Loader/> : ListOfAnimes(playData)}
    </div>
  )
}
