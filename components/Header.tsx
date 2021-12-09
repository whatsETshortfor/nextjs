import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Navbar bg="light" variant="light">
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Brand href="/">
            <Image
              src="/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="ET Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/apod">today`s picture</Link>
            <Link href="/earth">earth</Link>
            <Link href="/starwars">Star Wars&trade; planets</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
