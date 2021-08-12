import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

function FeaturedMovie() {
  const show = useSelector((state) => state?.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const powerpuffGirlsID = 1955;
    getShowPowerpuffGirls(powerpuffGirlsID);
  }, []);

  function getShowPowerpuffGirls(idShow) {
    dispatch({ type: "SET_LOADING_SHOW", loadingShow: true });
    axios
      .get(`https://api.tvmaze.com/shows/${idShow}`)
      .then((response) => {
        dispatch({ type: "ADD_SHOW", show: response.data });
        getEpisodesPowerpuffGirls(response.data.id);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        dispatch({ type: "SET_LOADING_SHOW", loadingShow: false });
      });
  }

  function getEpisodesPowerpuffGirls(idShow) {
    dispatch({ type: "SET_LOADING_EPISODES", loadingEpisodes: true });
    axios
      .get(`https://api.tvmaze.com/shows/${idShow}/episodes`)
      .then((response) => {
        dispatch({ type: "ADD_EPISODES", episodes: response.data });
        console.log(show);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        dispatch({ type: "SET_LOADING_EPISODES", loadingEpisodes: false });
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
      {show && (
        <section
          className="featured"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${show.image?.original})`,
          }}
        >
          <div className="featured-vertical">
            <div className="featured-horizontal">
              <div className="featured-name">{show?.name}</div>
              <div className="featured-info">
                {show.rating?.average && (
                  <div
                    className={
                      show.rating?.average > 6
                        ? "featured-points"
                        : "featured-points-negative"
                    }
                  >
                    {show.rating?.average} rating
                  </div>
                )}
                {show?.premiered && (
                  <div className="featured-year">
                    {getYear(show?.premiered)}
                  </div>
                )}
                {show?.type && (
                  <div className="featured-type">{show?.type}</div>
                )}
              </div>
              <div
                className="featured-description"
                dangerouslySetInnerHTML={{ __html: show?.summary }}
              ></div>

              {show?.genres?.length && (
                <div className="featured-topics">
                  <strong>Genres:</strong> {show?.genres?.join(", ")}
                </div>
              )}
              <div className="featured-topics">
                <strong>Language:</strong> {show.language}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default FeaturedMovie;
