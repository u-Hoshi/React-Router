import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // 無意味な配列100件を作成、これをpage1DetailsAに渡す
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => {
    history.push("/page1/detailsA");
  };

  return (
    <>
      <div>
        <h1>Page1です</h1>
        {/* <Link to="/page1/detailsA"> */}
        {/* linkのtoをオブジェクトの形にかえてstateを渡す */}
        <Link to={{ pathname: "/page1/detailsA", state: arr }}>
          <button>DetailsA</button>
        </Link>
        <Link to="/page1/detailsB">DetailsB</Link>
      </div>
      <button onClick={onClickDetailA}>DetailsA</button>
    </>
  );
};
