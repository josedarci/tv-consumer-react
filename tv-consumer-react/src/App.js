import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Episode from "./pages/Episode";
import Home from "./pages/Home";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/:idEpisode">
                <Episode />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
