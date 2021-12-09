import { IPlanet, IPeople, IFilm, Resource } from "../services/SWApi";
import {
  Accordion,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import ModalMessage from "./ModalMessage";

function StarWarsPlanets({ planets }: { planets: Resource<IPlanet>[] }) {
  return (
    <Row xs={1} md={3} className="g-1">
      {planets.map((planet, i) => (
        <Col key={i}>
          <Card>
            <Card.Header as="h5">{planet.value.name}</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Climate: </strong>
                {planet.value.climate}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Diameter: </strong>
                {planet.value.diameter}km
              </ListGroupItem>
              <ListGroupItem>
                <strong>Gravity: </strong>
                {planet.value.gravity}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Orbital Period: </strong>
                {planet.value.orbital_period}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Population: </strong>
                {planet.value.population}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Rotation Period: </strong>
                {planet.value.rotation_period}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Surface Water: </strong>
                {planet.value.surface_water}%
              </ListGroupItem>
              <ListGroupItem>
                <strong>Terrain: </strong>
                {planet.value.terrain}
              </ListGroupItem>
              <ListGroupItem>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <strong>Residents</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        {planet.value.residents.map((resident, c) => (
                          <ListGroupItem key={c}>
                            <ModalMessage
                              buttonText={(resident as IPeople).name}
                              titleToShow={(resident as IPeople).name}
                              messageToShow={
                                "Gender: " +
                                (resident as IPeople).gender +
                                " | Birth Year: " +
                                (resident as IPeople).birth_year +
                                " | Height: " +
                                (resident as IPeople).height +
                                "cm"
                              }
                            />
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroupItem>
              <ListGroupItem>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <strong>Features in</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup className="list-group-flush">
                        {planet.value.films.map((film, q) => (
                          <ListGroupItem key={q}>
                            <ModalMessage
                              buttonText={(film as IFilm).title}
                              titleToShow={(film as IFilm).title}
                              messageToShow={
                                "Director: " +
                                (film as IFilm).director +
                                " | Opening Crawl: " +
                                (film as IFilm).opening_crawl +
                                " | Release Date: " +
                                (film as IFilm).release_date
                              }
                            />
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default StarWarsPlanets;
