import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  console.log(history);

  const onClickDetailA = () => {
    history.push("/page1/detailsA");
  };

  return (
    <>
      <div>
        <h1>Page1です</h1>
        {/* <Link to="/page1/detailsA"> */}
        <Link to={{ pathname: "/page1/detailsA", state: arr }}>
          <button>DetailsA</button>
        </Link>
        <Link to="/page1/detailsB">DetailsB</Link>
      </div>
      <button onClick={onClickDetailA}>DetailsA</button>
    </>
  );
};
