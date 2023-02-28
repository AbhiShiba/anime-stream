import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PlayList } from "./Components/AnimePlayList/PlayList/PlayList";
import { VideoPlay } from "./Components/AnimePlayList/VideoPlay/VideoPlay";
import { NavBar } from "./Components/NavBar/NavBar";
import { Axios } from "./utils/Axios";

export const UserContextData = createContext();

const base = "https://api.consumet.org/anime/gogoanime";

function App() {
  const [page, setPage] = useState(1);
  const [parameter, setParameter] = useState("recent-episodes");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState(null);
  const [topAiringData,setTopAiringData] = useState(null);
  const [videoLink,setVideoLink] = useState("")

  useEffect(() => {
    setLoading(true);
    // let url = "https://api.consumet.org/anime/gogoanime/recent-episodes?page=2"
    // top-airing

    const ApiData = async (arg1,arg2) => {
      const data = await Axios(arg1);
      setLoading(false);
      if(arg2 === "recent-episodes"){
        setAnimeData(data.data);
      } else {
        setTopAiringData(data.data)
      }
    };
    ApiData(`${base}/recent-episodes?page=${page}`,"recent-episodes");
    ApiData(`${base}/top-airing?page=${page}`,"top-airing")
  }, [page, parameter, search, videoLink]);

  return (
    <BrowserRouter>
      <UserContextData.Provider
        value={{
          page: [page, setPage],
          parameter: [parameter, setParameter],
          search: [search, setSearch],
          Data: animeData,
          load: [loading, setLoading],
          videoLink : [videoLink,setVideoLink],
          topAiringData : [topAiringData, setTopAiringData]
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<PlayList />} />
          <Route path="/other" element={<PlayList />} />
          <Route path="/video" element={<VideoPlay/>}/>
        </Routes>
      </UserContextData.Provider>
    </BrowserRouter>
  );
}

export default App;
