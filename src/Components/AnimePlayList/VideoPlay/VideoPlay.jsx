import React, { useContext } from "react";
import { UserContextData } from "../../../App";
import { Loader } from "../../Loader/Loader";
import ReactHlsPlayer from 'react-hls-player'

export function VideoPlay() {
  const linkData = useContext(UserContextData);
  let link;
  console.log(linkData)
  if(linkData.videoLink[0] === ""){
    link = ""
  } else {
    link = linkData.videoLink[0].sources_bk[0].file
  }
  
  return (
    <>
      {linkData.videoLink[0] === "" ? <Loader/> : <ReactHlsPlayer
    src={link}
    autoPlay={false}
    controls={true}
    width="800px"
    height="auto"
  />}
    </>
  )
}
