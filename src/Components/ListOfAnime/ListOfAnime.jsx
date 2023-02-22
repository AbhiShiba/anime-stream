import React, { useContext } from 'react'
import { UserContextData } from '../../App'

export function ListOfAnime() {
    const [context, setContext] = useContext(UserContextData);
    const PageNumber = () => {
        // pageNo(2);
        console.log(setContext(2))
    }
    console.log(context)
  return (
    <div>
        <button onClick={PageNumber}>increase</button>
    </div>
  )
}
