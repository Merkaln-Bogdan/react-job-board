import axios from "axios";

const fetchData = () => {
  const defaultOptions = {
    baseURL: "https://api.json-generator.com",
    headers: {
      "Content-type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export { fetchData };
