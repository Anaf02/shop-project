import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./Logo";
import "./Layout.css";
import { useEffect, useState } from "react";

function MenuBar() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      className={
        scroll
          ? "navbar navbar-light bg-light"
          : "navbar navbar-light bg-transparent"
      }
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Logo></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MenuBar;
