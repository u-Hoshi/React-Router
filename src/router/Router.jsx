import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
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
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {/* render={({ match: { url } }) => (
          <Switch> */}
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
