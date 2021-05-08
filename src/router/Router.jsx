import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page3 } from "../Page3";
import { Page3Details } from "../Page3Details";
import { Page404 } from "../Page404";
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
      {/* ネストしたルーティングには○○を使う */}
      <Route
        path="/page3"
        render={() => (
          // この中は普通のreact-routerと一緒
          <Switch>
            <Route
              exact
              path="/page3"
              render={() => (
                <Switch>
                  <Route path="/page3/details">
                    <Page3Details />
                  </Route>
                </Switch>
              )}
            >
              <Page3 />
            </Route>
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
