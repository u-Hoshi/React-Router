import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      {/* <Link to="/Page1/DetailsA">DetailsA</Link> */}
      <Link to="/page1/detailsA">
        <button>DetailsA</button>
      </Link>
      <Link to="/page1/detailsB">DetailsB</Link>
    </div>
  );
};
