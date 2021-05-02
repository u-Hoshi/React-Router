import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailsA } from "./Page1DetailsA";
import { Page1DetailsB } from "./Page1DetailsB";

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
        {/* ネストされたページの遷移 */}
        <Route
          path="/page1"
          // render={(props) => ( //propsの中のurlを取り出すには以下のように書く
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailsA`}>
                {" "}
                {/* テンプレート配列 */}
                <Page1DetailsA />
              </Route>
              <Route path={url + "/detailsB"}>
                　{/* 文字列配列 */}
                <Page1DetailsB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
