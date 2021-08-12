import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";

function DetailsEpisode() {
  const { idEpisode } = useParams();
  const history = useHistory();
  const episode = useSelector((state) => state?.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    getEpisodePowerpuffGirls();
  }, []);

  function getEpisodePowerpuffGirls() {
    dispatch({ type: "SET_LOADING_EPISODE", loadingEpisode: false });
    axios
      .get(`https://api.tvmaze.com/episodes/${idEpisode}`)
      .then((response) => {
        dispatch({ type: "ADD_EPISODE", episode: response.data });
      })
      .catch((error) => {
        history.push("/");
      })
      .then(() => {
        // always executed
        dispatch({ type: "SET_LOADING_EPISODE", loadingEpisode: false });
      });
  }

  function getYear(date) {
    if (date) {
      const year = date?.split("-");
      return year[0];
    }
  }

  return (
    <>
      {episode && (
        <section
          className="featured"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${episode.image?.original})`,
          }}
        >
          <div className="detail-episode-vertical">
            <div className="detail-episode-horizontal">
              <div className="detail-episode-name">{episode?.name}</div>
              <div className="detail-episode-info">
                <div className="detail-episode-year">
                  {getYear(episode?.airdate)}
                </div>
                <div className="detail-episode-type">{episode?.type}</div>
              </div>
              <div
                className="detail-episode-description"
                dangerouslySetInnerHTML={{ __html: episode?.summary }}
              ></div>
              <div className="detail-episode-buttons">
                <a
                  target="_blank"
                  href={episode.url}
                  className="detail-episode-watchbutton"
                >
                  <div>To watch</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default DetailsEpisode;
