import "./App.css";

import { ArticleType } from "types";

import { Layout } from "sections/Layout";
import { Article } from "page/Board/components/Article/Article";
import { dataTest } from "dataTest";

function App() {
  return (
    <Layout>
      <div className="flex justify-center items-center py-4 bg-light sm:px-2">
        {dataTest && (
          <ul className="w-4/5 sm:w-full">
            {dataTest.map((article: ArticleType) => (
              <Article article={article} key={article.id} />
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default App;
