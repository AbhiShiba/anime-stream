import React, { useContext } from "react";
import { UserContextData } from "../../../App";
import { Loader } from "../../Loader/Loader";
import { ListCard } from "../ListCard/ListCard";
import "./PlayList.css";

export function PlayList() {
  const data = useContext(UserContextData);
  const playData = data.Data;
  const loader = data.load[0];
  const parameter = data.parameter[0];
  let apiData;
  if (!loader) {
    if (parameter === "recent-episodes" || parameter === "top-airing") {
      apiData = playData.results;
    }
  }
  const ListOfAnimes = (arr) => {
    return arr.map((list, index) => {
      return <ListCard key={index} cardData={list} />;
    });
  };
  return (
    <div className="head-dive">
      <div className="list-main-container">
      <h5 className="heading-playlist">Recent Anime Episodes</h5>
        <div className="list-grid" key="animeData">
          {loader ? <Loader /> : ListOfAnimes(apiData)}
        </div>
      </div>
    </div>
  );
}
