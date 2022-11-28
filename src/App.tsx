import { routes } from "data/routes";
import { Board } from "page/Board";
import { Details } from "page/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={routes.board} element={<Board />} />

      <Route path="article/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
