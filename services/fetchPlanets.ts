import { useEffect, useState } from "react";
import { Service } from "../types/Service";
import { Planets, IPlanet, Resource } from "./SWApi";

const useGetPlanetsService = () => {
  const [result, setResult] = useState<Service<Resource<IPlanet>[]>>({
    status: "loading",
  });

  useEffect(() => {
    const cache = window.localStorage;
    const prefix = "swCache";

    const getData = async () => {
      const cached = cache.getItem(`${prefix}.Planets`);
      if (cached) {
        setResult({ status: "loaded", payload: JSON.parse(cached) });
      } else {
        const planets = await Planets.find((planet) => planet.name !== "");
        const planetsWithFilms = await planets.populateAll("films");
        const planetsWithAll = await planetsWithFilms.populateAll("residents");
        cache.setItem(
          `${prefix}.Planets`,
          JSON.stringify(planetsWithAll.resources)
        );
        setResult({ status: "loaded", payload: planetsWithAll.resources });
      }
    };
    getData();
  }, []);
  return result;
};

export default useGetPlanetsService;
