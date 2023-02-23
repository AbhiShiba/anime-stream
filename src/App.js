import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { OtherList } from "./Components/AnimePlayList/OtherList/OtherList";
import { PlayList } from "./Components/AnimePlayList/PlayList/PlayList";
import { NavBar } from "./Components/NavBar/NavBar";
import { Axios } from "./utils/Axios";

export const UserContextData = createContext();

const base = "https://gogoanime.consumet.stream";

function App() {
  const [page, setPage] = useState(1);
  const [parameter, setParameter] = useState("recent-release");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    setLoading(true);
    let url = `${base}/${parameter}?page=${page}`;
    if (parameter.charAt(0) === "s") {
      url = `${base}/${parameter}?keyw=${search}?page=${page}`;
    }
    const ApiData = async () => {
      const data = await Axios(url);
      setLoading(false);
      setAnimeData(data.data);
    };
    ApiData();
  }, [page, parameter, search]);

  return (
    <BrowserRouter>
      <UserContextData.Provider
        value={{
          page: [page, setPage],
          parameter: [parameter, setParameter],
          search: [search, setSearch],
          Data: animeData,
          load: loading,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<PlayList />} />
          <Route path="/other" element={<OtherList/>} />
        </Routes>
      </UserContextData.Provider>
    </BrowserRouter>
  );
}

export default App;
