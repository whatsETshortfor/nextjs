import { Carousel, CarouselItem } from "react-bootstrap";
import ApodImage from "../types/ApodImage";
import ModalMessage from "./ModalMessage";

function ApodCarousel({ apodImages }: { apodImages: ApodImage[] }) {
  return (
    <div>
      <Carousel>
        {apodImages.map((image, i) => (
          <CarouselItem key={i}>
            <img className="d-block w-100" src={image.url} alt="First slide" />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>
                <small>
                  {image.date} | &copy;{image.copyright}
                </small>
              </p>
              <ModalMessage
                buttonText="Show full description"
                titleToShow={image.title}
                messageToShow={image.explanation}
              />
            </Carousel.Caption>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}

export default ApodCarousel;
