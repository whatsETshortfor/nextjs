import { NextPage } from "next";
import ApodCarousel from "../components/ApodCarousel";
import fetchApod from "../helpers/fetchApod";

const Apod: NextPage = () => {
  const service = fetchApod();

  return (
    <main>
      <div>
        {service.status === "loading" && <div>Loading</div>}
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
