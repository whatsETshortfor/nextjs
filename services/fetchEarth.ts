import { useEffect, useState } from "react";
import { Service } from "../types/Service";

const useGetEarthService = () => {
  const [result, setResult] = useState<Service<Blob>>({
    status: "loading",
  });

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/earth/imagery?api_key=jk68o3jngastjwQ0A8duQ0XO8koK4rkcHafAWIUE&lat=51.433300&lon=-3.176603&dim=0.15&&date=2018-01-01"
    )
      .then((response) => response.blob())
      .then((response) => setResult({ status: "loaded", payload: response }))
      .catch((error) => setResult({ status: error, error }));
  }, []);
  return result;
};

export default useGetEarthService;
