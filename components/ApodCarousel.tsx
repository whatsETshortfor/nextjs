import { Carousel, CarouselItem } from "react-bootstrap";
import ApodImage from "../types/ApodImage";

const ApodCarousel: React.FC<ApodImage[]> = ({ apodImages }) => {
  return (
    <div>
      <Carousel>
        {apodImages.map((image, i) => (
          <CarouselItem key={i}>
            <img className="d-block w-100" src={image.url} alt="First slide" />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>
                <small>{image.explanation.substring(0, 200)}...</small>
              </p>
            </Carousel.Caption>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default ApodCarousel;
