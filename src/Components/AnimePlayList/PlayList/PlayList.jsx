import React, { useContext } from "react";
import { UserContextData } from "../../../App";
import { Loader } from "../../Loader/Loader";
import { ListCard } from "../ListCard/ListCard";
import { OtherList } from "../OtherList/OtherList";
import "./PlayList.css";

export function PlayList() {
  const data = useContext(UserContextData);
  const playData = data.Data;
  const loader = data.load;
  // console.log(playData);
  const parameter = data.parameter[0];
  let apiData;
  if(!loader){
    if(parameter === "recent-episodes" || parameter === "top-airing"){
      apiData = playData.results;
    } else {
      apiData = playData;
    }
  }
  const ListOfAnimes = (arr) => {
    return arr.map((list, index) => {
      return parameter === "recent-episodes" ? (
        <ListCard key={index} cardData={list} />
      ) : (
        <OtherList key={index} cardData={list} />
      );
    });
  };
  return (
    <div className="list-grid" key="animeData">
      {loader ? <Loader /> : 
      ListOfAnimes(apiData)
      }
    </div>
  );
}
