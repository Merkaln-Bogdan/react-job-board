import { dataTest } from "dataTest";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { articlesSelector, setAllArticles } from "redux/slices/articleSlice";

const useBoard = () => {
  const dispatch = useAppDispatch();

  const articlesList = useAppSelector(articlesSelector.selectAll);

  useEffect(() => {
    dispatch(setAllArticles(dataTest));
  }, [dispatch]);

  return { articlesList };
};
export { useBoard };
