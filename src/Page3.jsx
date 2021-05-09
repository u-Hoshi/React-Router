import { Link } from "react-router-dom";

export const Page3 = () => {
  return (
    <div>
      <h1>ページ3です</h1>
      <p>追加</p>
      <Link to="/page3/details">page3Details</Link>
      <Link to="/page3/details/B">page3DetailsB</Link>
    </div>
  );
};
