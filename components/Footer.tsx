import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <footer>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Link href="/">
              With thanks to NASA for doing all the hard work
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
}
