import React, { Suspense } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ "../pages/home"),
);
const About = React.lazy(() =>
  import(/* webpackChunkName: "about" */ "../pages/about"),
);

function App(props) {
  return (
    <main className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
