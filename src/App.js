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
  const [videoLink,setVideoLink] = useState("")

  useEffect(() => {
    setLoading(true);
    let url = `${base}/${parameter}?page=${page}`;
    // let url = "https://api.consumet.org/anime/gogoanime/recent-episodes?page=2"
    if(parameter !== "recent-episodes" && parameter !== "top-airing"){
      url = `https://gogoanime.consumet.stream/${parameter}?page=${page}`
    }
    console.log(url);
    if (parameter.charAt(0) === "s") {
      url = `${base}/${parameter}?keyw=${search}?page=${page}`;
    }
    const ApiData = async () => {
      const data = await Axios(url);
      console.log(data);
      setLoading(false);
      setAnimeData(data.data);
    };
    ApiData();
  }, [page, parameter, search, videoLink]);

  return (
    <BrowserRouter>
      <UserContextData.Provider
        value={{
          page: [page, setPage],
          parameter: [parameter, setParameter],
          search: [search, setSearch],
          Data: animeData,
          load: loading,
          videoLink : [videoLink,setVideoLink],
          setLoading : setLoading
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
