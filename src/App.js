import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>

        {/* <Home />
        <Page1 />
        <Page2 /> */}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
