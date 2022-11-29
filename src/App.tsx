import { routes } from "data/routes";
import { dataTest } from "dataTest";
import { Board } from "page/Board";
import { Details } from "page/Details";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { setAllArticles } from "redux/slices/articleSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllArticles(dataTest));
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.board} element={<Board />} />

      <Route path="article/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
