import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { VideoPlay } from "./Components/AnimePlayList/VideoPlay/VideoPlay";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import { Axios } from "./utils/Axios";

export const UserContextData = createContext();

const base = "https://api.consumet.org/anime/gogoanime";

function App() {
  const [page, setPage] = useState(1);
  const [parameter, setParameter] = useState("recent-episodes");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [loading1,setLoading1] = useState(true);
  const [animeData, setAnimeData] = useState(null);
  const [topAiringData, setTopAiringData] = useState(null);
  const [videoLink, setVideoLink] = useState("");

  useEffect(() => {
    setLoading(true);
    setLoading1(true);
    // let url = "https://api.consumet.org/anime/gogoanime/recent-episodes?page=2"
    // top-airing

    const ApiData = async (arg1, arg2) => {
      const data = await Axios(arg1);
      setAnimeData(data.data);

      setLoading(false);
    };

    const ApiData1 = async (arg1, arg2) => {
      const data = await Axios(arg1);

      setTopAiringData(data.data);
      setLoading1(false);
    };
    ApiData(`${base}/recent-episodes?page=${page}`, "recent-episodes");
    ApiData1(`${base}/top-airing?page=${page}`, "top-airing");
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
          load1: [loading1,setLoading1],
          videoLink: [videoLink, setVideoLink],
          topAiringData: [topAiringData, setTopAiringData],
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoPlay />} />
        </Routes>
      </UserContextData.Provider>
    </BrowserRouter>
  );
}

export default App;
