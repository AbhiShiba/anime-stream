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
        `https://api.consumet.org/anime/gogoanime/watch/${cardData.id}-episode-${cardData.episodeNumber}`
      );
      vLink(linkData.data);
    };
    getAnimePlayLink()
    navigate("/video")
  };

  return (
    <div className="card-1" key={cardData.title + index} onClick={playVideo}>
      <div className="card-sec" key={"card-sec" + index}>
        <img src={cardData.image} alt={cardData.image} />
        <h5>{cardData.title}</h5>
      </div>
      <div className="play-btn">
        <BsFillPlayFill style={{ fontSize: "2rem" }} />
      </div>
      <p key={"p" + index}>{`Episode-${cardData.episodeNumber}`}</p>
    </div>
  );
}
