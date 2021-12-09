import { NextPage } from "next";
import { Spinner } from "react-bootstrap";
import StarWarsPlanets from "../components/StarWarsPlanets";
import fetchPlanets from "../services/fetchPlanets";

const StarWars: NextPage = () => {
  const service = fetchPlanets();

  return (
    <main>
      <div>
        {service.status === "loading" && (
          <div className="spinner-div">
            <Spinner animation="border" variant="info" />
          </div>
        )}
        {service.status === "loaded" && (
          <StarWarsPlanets planets={service.payload} />
        )}
        {service.status === "error" && (
          <div>Error, failed to retrieve the APOD Data</div>
        )}
      </div>
    </main>
  );
};

export default StarWars;
