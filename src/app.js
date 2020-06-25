import React, { Suspense } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ "./pages/home"),
);
const About = React.lazy(() =>
  import(/* webpackChunkName: "about" */ "./pages/about"),
);

function App(props) {
  return (
    <main className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
