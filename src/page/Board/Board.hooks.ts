import { useAppSelector } from "redux/hooks";
import { articlesSelector } from "redux/slices/articleSlice";

const useBoard = () => {
  const articlesList = useAppSelector(articlesSelector.selectAll);

  return { articlesList };
};
export { useBoard };
