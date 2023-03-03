import React, { useContext, useState } from 'react'
import './PaginationComp.css'
import { UserContextData } from '../../../App';


export function PaginationComp({pageType}) {
  const valueOfContext = useContext(UserContextData);
  const pageNumber = valueOfContext.page[1];
  const [start,setStart] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);

  let countArr = []

  for(let i=0;i<10;i++){
    countArr.push(start+i)
  }

  const changePage = (e) => {

    const currentPageNum = Number(e.target.innerText)
    setCurrentPage(currentPageNum)

    if(pageType === "recent-episodes"){
      pageNumber(currentPageNum)
    }

    if(currentPageNum === 1){
      return
    }

    if(currentPageNum === start+9){
      setStart(start+1)
    }

    if(currentPageNum === start){
      setStart(start-1)
    }
  }

  const liCount = (arr) => {
   return arr.map((item,idx)=>{
    return <li className={currentPage === item ? "li-btn li-style" : 'li-btn'} key={"li"+idx} onClick={changePage}>{item}</li>
   })
  }

  return (
    <div className="count">
      <ul key="page">
       {liCount(countArr)}
      </ul>
    </div>
  )
}
