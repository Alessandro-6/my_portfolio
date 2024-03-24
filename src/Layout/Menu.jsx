/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Menu({ toggleColorTheme, setToggleColorTheme }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [pinned, setPinned] = useState("-pinned");
  useEffect(() => {
    function handleScrollEvent() {
      const scrollDiff = window.scrollY - scrollPosition;
      // console.log(scrollDiff);
      console.log(window.scrollY);
      // console.log(scrollPosition);
      setPinned(
        window.scrollY !== 0 && scrollDiff < 0
          ? "headroom--not-top"
          : scrollDiff > 0
          ? "-unpinned"
          : "-pinned"
      );
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScrollEvent);
    return () => document.removeEventListener("scroll", handleScrollEvent);
  }, [scrollPosition, setPinned]);
  return (
    <Navbar
      expand="sm"
      className={`navbar navbar-expand-sm navbar-light pt-3 pb-2 ${pinned}`}
    >
      <Container className="container">
        <Navbar.Brand className="navbar-brand d-flex align-items-end" href="/">
          <UilUser size="40px" />
          <span className="ms-3">Alessandro</span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler"
          aria-expanded={expanded}
          aria-controls="navbarNav"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarNav">
          <Nav className="navbar-nav mx-auto">
            <Nav.Item className="nav-item">
              <Nav.Link href="#about" className="nav-link">
                <span data-hover="Sobre">Sobre</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link href="#project" className="nav-link">
                <span data-hover="Projetos">Projetos</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                href="https://drive.google.com/file/d/1hYJPPbShHdbtxlfT6K-wDcWyTnR-JMcB/view?usp=sharing"
                className="nav-link"
              >
                <span data-hover="Currículo">Currículo</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link href="#contact" className="nav-link">
                <span data-hover="Contacto">Contacto</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div className="color-mode d-lg-flex justify-content-center align-items-center">
                <button
                  className="border border-0 bg-transparent"
                  onClick={() => setToggleColorTheme(!toggleColorTheme)}
                >
                  {toggleColorTheme ? (
                    <UilSun size="30px" color="#fff" />
                  ) : (
                    <UilMoon size="30px" color="#000" />
                  )}
                </button>
                Color mode
              </div>
            </div>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
