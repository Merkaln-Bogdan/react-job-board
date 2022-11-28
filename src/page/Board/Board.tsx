import { ArticleType } from "types";

import { Layout } from "sections/Layout/Layout";
import { Article } from "page/Board/components/Article/Article";

import { useBoard } from "./Board.hooks";

function Board() {
  const { articlesList } = useBoard();

  return (
    <Layout>
      <div className="flex justify-center items-center py-4 bg-light sm:px-2">
        {articlesList && (
          <ul className="w-4/5 sm:w-full">
            {articlesList.map((article: ArticleType) => (
              <Article article={article} key={article.id} />
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export { Board };
