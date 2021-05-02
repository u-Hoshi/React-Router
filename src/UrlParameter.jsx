import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  // パラメータ取得
  const { id } = useParams();
  console.log(useParams());
  // ここまで
  // クエリーパラメーターに関して
  const { search } = useLocation();
  console.log(useLocation());
  const query = new URLSearchParams(search);
  console.log(query);
  // ここまで
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です！！！</p>
      <p>クエリーパラメーターは{query.get("name")}です</p>
    </div>
  );
};
