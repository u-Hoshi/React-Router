import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    // パスの中に「:」を使うことでURLパラメータを使うと宣言している
    exact: false,
    children: <UrlParameter />
  }
];
