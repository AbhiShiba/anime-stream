import React, { useContext } from 'react'
import { UserContextData } from '../../App'

export function ListOfAnime() {
    const [context, setContext] = useContext(UserContextData);
    const PageNumber = () => {

    }

  return (
    <div>
        <button onClick={PageNumber}>increase</button>
    </div>
  )
}
