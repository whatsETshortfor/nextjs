import { useEffect, useState } from "react";
import ApodImage from "../types/ApodImage";
import { Service } from "../types/Service";

const useGetApodImageService = () => {
  const [result, setResult] = useState<Service<ApodImage[]>>({
    status: "loading",
  });

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?start_date=2021-12-01&end_date=2021-12-06&api_key=jk68o3jngastjwQ0A8duQ0XO8koK4rkcHafAWIUE"
    )
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", payload: response }))
      .catch((error) => setResult({ status: error, error }));
  }, []);
  return result;
};

export default useGetApodImageService;
