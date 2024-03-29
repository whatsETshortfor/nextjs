import { NextPage } from "next";
import { Spinner } from "react-bootstrap";
import ApodCarousel from "../components/ApodCarousel";
import fetchApod from "../services/fetchApod";

const Apod: NextPage = () => {
  const service = fetchApod();

  return (
    <main>
      <div>
        {service.status === "loading" && (
          <div className="spinner-div">
            <Spinner animation="border" variant="info" />
          </div>
        )}
        {service.status === "loaded" && (
          <ApodCarousel apodImages={service.payload} />
        )}
        {service.status === "error" && (
          <div>Error, failed to retrieve the APOD Data</div>
        )}
      </div>
    </main>
  );
};

export default Apod;
