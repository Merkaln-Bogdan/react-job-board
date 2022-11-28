import { useParams } from "react-router-dom";

import { dataTest } from "dataTest";

const useDetails = () => {
  const { id } = useParams();
  const article = dataTest?.filter((el) => el.id === id)[0];

  return { ...article };
};
export { useDetails };
