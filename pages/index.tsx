import Link from "next/link";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    <main className="home">
      <Image src="/logo.png" className="imgInvert" height="100" alt="ET Logo" />
      <h1>What`s E.T. short for?!</h1>
      <h2>A shadowy flight into the world of a website which does not exist</h2>
    </main>
  );
}
