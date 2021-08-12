import { createStore } from "redux";

const INITIAL_STATE = {
  episodes: ([] = []),
  show: null,
  episode: null,
  loadingShow: false,
  loadingEpisodes: false,
  loadingEpisode: false,
};

function shows(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_EPISODES":
      return { ...state, episodes: [...state.episodes, action.episodes] };

    case "ADD_SHOW":
      return { ...state, show: action.show };

    case "ADD_EPISODE":
      return { ...state, episode: action.episode };

    case "SET_LOADING_SHOW":
      return { ...state, loadingShow: action.loadingShow };

    case "SET_LOADING_EPISODES":
      return { ...state, loadingEpisodes: action.loadingEpisodes };

    case "SET_LOADING_EPISODE":
      return { ...state, loadingEpisode: action.loadingEpisode };

    default:
      return state;
  }
}

const store = createStore(shows);

export default store;
