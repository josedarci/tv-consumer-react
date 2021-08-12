import React from "react";
import EpisodesRow from "../../components/EpisodesRow";
import FeaturedMovie from "../../components/FeaturedMovie";
import "./styles.css";

// import { Container } from './styles';
// FeaturedMovie is a component more important because show episode selected.
// EpisodesRow is a second component , your function is renderized a more miniatures od episodes of girls power
function Home() {
  return (
    <>
      <FeaturedMovie />
      <EpisodesRow />
    </>
  );
}

export default Home;
