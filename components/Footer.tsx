import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container className="container_center">
          <Navbar.Text>May E.T. be with you... always.</Navbar.Text>
        </Container>
      </Navbar>
    </footer>
  );
}
