import { useEffect, useState, createContext } from "react";
import "./App.css";
import { Loader } from "./Components/Loader/Loader";
// import { ListOfAnime } from "./Components/ListOfAnime/ListOfAnime";
import { NavBar } from "./Components/NavBar/NavBar";
import { Axios } from "./utils/Axios";

export const UserContextData = createContext();

const base = "https://gogoanime.consumet.stream";

function App() {
  const [page, setPage] = useState(1);
  const [parameter, setParameter] = useState("recent-release");
  const [search, setSearch] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `${base}/${parameter}?page=${page}`;
    if (parameter.charAt(0) === "s") {
      url = `${base}/${parameter}?keyw=${search}?page=${page}`;
    }
    const ApiData = async () => {
      const data = await Axios(url);
      setLoading(false);
      console.log(data.data);
    };
    ApiData();
  }, [page,parameter,search]);

  return (
    <UserContextData.Provider
      value={{
        page: [page, setPage],
        parameter: [parameter, setParameter],
        search: [search, setSearch],
      }}
    >
      {/* <ListOfAnime/> */}
      <NavBar />
      {loading ? <Loader/> : ""}
    </UserContextData.Provider>
  );
}

export default App;
