import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailsA = () => {
  // const { state } = useLocation();
  const state = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailsAです</h1>
      <button onClick={onClickBack}>1つ前に戻る</button>
    </div>
  );
};
