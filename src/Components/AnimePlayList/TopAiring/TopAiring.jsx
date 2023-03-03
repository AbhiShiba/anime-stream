import React, { useContext, useState } from "react";
import { UserContextData } from "../../../App";
// import {Carousel} from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Loader } from "../../Loader/Loader";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopAiring.css";

// import {CCarousel, CCarouselItem} from "@coreui/react"

export function TopAiring() {
  const value = useContext(UserContextData);
  const data = value.topAiringData[0];
  const loading = value.load1[0];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const topAiringAinime = (arr) => {
    return arr.map((item, index) => {
      return (
        <Carousel.Item key={"top-div1" + index}>
          <div
            className="caro-div"
            key={"top-div" + index}
            onClick={() => {
              console.log(item);
            }}
          >
            <img src={item.image} alt={item.title} />
            <div className="title-section">
              <h3 className="title-name">{item.title}</h3>
              <div className="gen-list">
                <p>Genres</p>
                {item.genres.map((gen, idx) => {
                  return (
                    <span key={index + "" + idx} className="genres-details">
                      {gen}{" "}
                    </span>
                  );
                })}{" "}
              </div>
            </div>
          </div>
        </Carousel.Item>
      );
    });
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{
              width: "70vw",
              display: "flex",
              justifyContent: "center",
              boxShadow: "0 0 8px 3px white",
              borderRadius: "5px",
            }}
          >
            {topAiringAinime(data.results)}
          </Carousel>
        </>
      )}
    </>
  );
}
