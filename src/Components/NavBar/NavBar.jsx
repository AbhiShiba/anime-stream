import React, { useContext, useState } from "react";
import "./NavBar.css";
import { CgProfile } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";
import { UserContextData } from "../../App";
import { Genres } from "../../utils/extraData";

export function NavBar() {
  const value = useContext(UserContextData);
  const [parameter, setParameter] = value.parameter;

  const [navClass, setNavClass] = useState({
    popular: "",
    movies: "",
    topAiring: "",
    genres: "",
  });

  let styleStatus = Genres.map((item, index) => {
    return {
      id: `list-${index}`,
      flag: false,
    };
  });

  const [genreStyle, setGenreStyle] = useState(styleStatus);

  const navigationBarHandler = (e) => {
    console.log(parameter);
    const element = e.target.getAttribute("name");
    if (element === null) {
      return;
    }

    if (element === "popular") {
      setNavClass({
        popular: "add-style",
        movies: "",
        topAiring: "",
        genres: "",
      });
      setParameter("popular");
    }

    if (element === "movies") {
      setNavClass({
        popular: "",
        movies: "add-style",
        topAiring: "",
        genres: "",
      });
      setParameter("anime-movies");
    }

    if (element === "topAiring") {
      setNavClass({
        popular: "",
        movies: "",
        topAiring: "add-style",
        genres: "",
      });
      setParameter("top-airing");
    }

    if (element === "genres") {
      setNavClass({
        popular: "",
        movies: "",
        topAiring: "",
        genres: "add-style",
      });
    }
  };

  const genres_list = (arr) => {
    return arr.map((item, index) => {
      return (
        <li
          className={genreStyle[index].flag ? "list-style" : ""}
          id={`list-${index}`}
          key={`list-${index}`}
          onClick={(e) => listHandler(e.target.id,item)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </li>
      );
    });
  };

  const listHandler = (id,gen) => {
    console.log(id,gen);
    let checkStatus = genreStyle.map((li) => {
      return li.id === id ? { ...li, flag: !li.flag } : { ...li, flag: false };
    });
    setGenreStyle(checkStatus);
    setParameter(`genre/${gen}`)
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar-section1">
        <div className="nav-section">
          <h4 className="logo">AniStream</h4>
        </div>
        <div className="nav-section searchBar">
          <div className="search-bar">
            <input type="text" placeholder="Search Anime Title" />
            <FcSearch style={{ fontSize: "25px" }} />
          </div>
        </div>
        <div className="nav-section">
          <CgProfile style={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="nav-bar-section2" onClick={navigationBarHandler}>
        <div className={`nav-section-2 ${navClass.popular}`} name="popular">
          Popular Animes
        </div>
        <div className={`nav-section-2 ${navClass.movies}`} name="movies">
          Anime Movies
        </div>
        <div className={`nav-section-2 ${navClass.topAiring}`} name="topAiring">
          Top Airing Animes
        </div>
        <div className={`nav-section-2 ${navClass.genres}`} name="genres">
          Genres
        </div>
      </div>
      <div className="genres-show">
        <ul className="genres-list" key="un-ordered-list">
          {genres_list(Genres)}
        </ul>
      </div>
    </div>
  );
}
