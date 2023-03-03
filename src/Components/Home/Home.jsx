import React from "react";
import { PlayList } from "../AnimePlayList/PlayList/PlayList";
import { TopAiring } from "../AnimePlayList/TopAiring/TopAiring";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export function Home() {

  const navi = useNavigate()
  return (
    <div>
      <div className="main-calo-div">
        <div className="carousel-page">
          <div className="anime-calo-heading">
            <h5>Top Airing Animes</h5>
            <FiArrowRight
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => {
                console.log("hii");
              }}
            />
          </div>

          <TopAiring />
        </div>
      </div>
      <div className="head-dive">
        <div className="list-main-container">
          <div className="heading-playlist">
            <h5>Recent Anime Episodes</h5>
            <FiArrowRight
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => {
                navi("/recent-anime")
              }}
            />
          </div>
          <PlayList />
        </div>
      </div>
    </div>
  );
}
