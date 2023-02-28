import React from 'react'
import { PlayList } from '../AnimePlayList/PlayList/PlayList'
import { TopAiring } from '../AnimePlayList/TopAiring/TopAiring'

export function Home() {
  
  return (
    <div>
        <TopAiring/>
        <PlayList />
    </div>
  )
}
