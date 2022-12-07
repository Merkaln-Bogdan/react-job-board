import { useParams } from "react-router-dom";

import { useAppSelector } from "redux/hooks";
import { articlesSelector } from "redux/slices/articleSlice";

const useDetails = () => {
  const { id } = useParams();
  //api test that does not contain additional requests for ID
  const articlesList = useAppSelector(articlesSelector.selectAll);

  const article = articlesList?.filter((el) => el.id === id)[0];

  return { article };
};
export { useDetails };
