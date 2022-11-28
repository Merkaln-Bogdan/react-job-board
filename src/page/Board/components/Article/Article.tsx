import { ArticleType } from "types/index";
import { Image } from "components/Image";
import { Headline } from "components/Headline";
import { Icon } from "components/Icon";
import { calculationDate } from "helpers/datingHooks";
import { Link } from "react-router-dom";
import { Rate } from "components/Rating";

export type ArticleProps = {
  article: ArticleType;
};

const Article = (props: ArticleProps) => {
  const { article } = { ...props };

  const { id, pictures, title, createdAt } = article;

  return (
    <li
      key={id}
      className="flex mb-2 bg-white px-4 py-6 rounded-lg items-center shadow shadow-el-sdw sm:bg-bg_light sm:items-baseline"
    >
      <div className="w-[85px] h-[85px] rounded-full sm:w-[55px] sm:h-[55px]">
        <Image
          source={pictures[1]}
          alt="mini_post"
          className="w-[85px] h-[85px] rounded-full sm:w-[55px] sm:h-[55px] sm:mt-4"
        />
      </div>

      <div className="flex sm:flex-col-reverse">
        <Link to={`/article/${id}`} className="mx-8 sm:mx-4">
          <p className="font-bold text-dark text-base">{title}</p>
          <div className="text-lightgray font-light">
            <p>
              Department name &#8226; Allgemeines Krankenhaus der Stadt Wien -
              AKH
            </p>

            <span className="flex">
              <Icon name="BsGeoAltFill" className="mr-2" /> Vienna, Austria
            </span>
          </div>
        </Link>

        <div className="flex justify-between items-center ml-auto text-lightgray sm:mx-4">
          <Rate rate={4} />

          <div className="flex flex-col justify-between h-20 w-40 items-end sm:h-auto">
            <Icon name="BsBookmark" className="sm:hidden" />

            <Headline as="p">
              posted {calculationDate(createdAt).postedDate} ago
            </Headline>
          </div>
        </div>
      </div>
    </li>
  );
};

export { Article };
