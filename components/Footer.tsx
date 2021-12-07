import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container className="container_center">
          <Navbar.Text>
            With special thanks to NASA for doing all the cool space stuff
          </Navbar.Text>
        </Container>
      </Navbar>
    </footer>
  );
}
