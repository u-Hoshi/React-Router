import { BrowserRouter, Link } from "react-router-dom";

import "./styles.css";

import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/page3">Page3</Link>

        {/* <Home />
        <Page1 />
        <Page2 /> */}
        <Router />
      </div>
    </BrowserRouter>
  );
}
