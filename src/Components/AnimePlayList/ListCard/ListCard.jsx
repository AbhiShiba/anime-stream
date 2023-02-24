import React, { useContext } from "react";
import "./ListCard.css";
import { BsFillPlayFill } from "react-icons/bs";
import { UserContextData } from "../../../App";
import { Axios } from "../../../utils/Axios";
import { useNavigate } from "react-router-dom";

export function ListCard({ index, cardData }) {
  const videoLink = useContext(UserContextData);
  const vLink = videoLink.videoLink[1];
  const navigate = useNavigate()
  const playVideo = () => {
    const getAnimePlayLink = async () => {
      const linkData = await Axios(
        `https://gogoanime.consumet.stream/vidcdn/watch/${cardData.animeId}-episode-${cardData.episodeNum}`
      );
      vLink(linkData.data);
    };
    getAnimePlayLink()
    navigate("/video")
  };

  return (
    <div className="card" key={cardData.animeTitle + index} onClick={playVideo}>
      <div className="card-sec" key={"card-sec" + index}>
        <img src={cardData.animeImg} alt={cardData.animeId} />
        <h5>{cardData.animeTitle}</h5>
      </div>
      <div className="play-btn">
        <BsFillPlayFill style={{ fontSize: "2rem" }} />
      </div>
      <p key={"p" + index}>{`Episode-${cardData.episodeNum}`}</p>
    </div>
  );
}
