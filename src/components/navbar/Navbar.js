import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../asset/img/logo.png';
import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbarhead () {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#ouroffer"
              className={
                activeLink === "ouroffer" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("ouroffer")}
            >
              Courses
            </Nav.Link>
            <Nav.Link
              href="#opportunity"
              className={
                activeLink === "opportunity"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("opportunity")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#roi"
              className={
                activeLink === "roi" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("roi")}
            >
              Mentors
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className={
                activeLink === "faq" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("faq")}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className={
                activeLink === "faq" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("faq")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <div className="button">
            <button>Login</button>

            <Link to="/admission" className="outreach-button">
              <button className="but2">Get Started</button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarhead