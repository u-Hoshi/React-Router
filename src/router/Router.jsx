import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page3 } from "../Page3";
import { Page3Details } from "../Page3Details";
import { Page3DetailsB } from "../Page3DetailsB";
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
            {/* この中身もまとめてループさせて表示するようにする */}
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
        render={({ match: { url } }) => (
          // この中は普通のreact-routerと一緒
          // 保守の事も考えて出来るだけまとめたい→propsで渡ってくる共通部分を使う
          // どこが共通部分か分からなかったらpropsをconsoleで確認しよう！
          <Switch>
            <Route exact path={url}>
              <Page3 />
            </Route>
            <Route exact path={`${url}/details`}>
              <Page3Details />
            </Route>
            <Route path={`${url}/details/B`}>
              <Page3DetailsB />
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
