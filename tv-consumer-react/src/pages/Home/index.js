import React from "react";
import EpisodesRow from "../../components/EpisodesRow";
import FeaturedMovie from "../../components/FeaturedMovie";
import "./styles.css";

// import { Container } from './styles';

function Home() {
  return (
    <>
      <FeaturedMovie />
      <EpisodesRow />
    </>
  );
}

export default Home;
