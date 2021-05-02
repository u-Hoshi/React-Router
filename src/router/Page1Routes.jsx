import { Page1 } from "../Page1";
import { Page1DetailsA } from "../Page1DetailsA";
import { Page1DetailsB } from "../Page1DetailsB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailsA",
    exact: false,
    children: <Page1DetailsA />
  },
  {
    path: "/detailsB",
    exact: false,
    children: <Page1DetailsB />
  }
];
