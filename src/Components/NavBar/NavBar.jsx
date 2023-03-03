import React, { useContext } from "react";
import "./NavBar.css";
import { CgProfile } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";
import { UserContextData } from "../../App";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const value = useContext(UserContextData);
  const setParameter = value.parameter[1];
  const setPage = value.page[1];
  const parameter = value.parameter[0];
  const navigate = useNavigate();
  const vidLink = value.videoLink[1];
  const vid = value.videoLink[0];
  const setLoading = value.load[1];

  const backToHome = () => {
    if (vid !== "" || parameter === "recent-episodes") {
      setParameter("recent-episodes");
      vidLink("");
      setPage(1);
      navigate("/");
      return;
    }
    setParameter("recent-episodes");
    setLoading(true);
    vidLink("");
    setPage(1);
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-section1">
        <div
          className="nav-section"
          style={{ cursor: "pointer" }}
          onClick={backToHome}
        >
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
    </div>
  );
}
