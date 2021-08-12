import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";

function EpisodesRow() {
  const episodes = useSelector((state) => state?.episodes[0]);
  console.log(episodes);

  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = episodes.length * 200;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 80;
    }
    setScrollX(x);
  };

  return (
    <>
      {episodes?.length > 0 && (
        <div className="movieRow">
          <h2>Episodes</h2>

          <div className="movieRow--left" onClick={handleLeftArrow}>
            <NavigateBeforeIcon style={{ fontSize: 50 }} />
          </div>

          <div className="movieRow--right" onClick={handleRightArrow}>
            <NavigateNextIcon style={{ fontSize: 50 }} />
          </div>

          <div className="movieRow--listarea">
            <div
              className="movieRow--list"
              style={{
                marginLeft: scrollX,
                width: episodes.length * 200,
              }}
            >
              {episodes?.length > 0 &&
                episodes.map((item) => (
                  <div key={item.id} className="movieRow--item">
                    <Link className="link-episode" to={`/${item.id}`}>
                      <img alt={item.name} src={item.image.original} />
                      <small>{item.name}</small>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EpisodesRow;
