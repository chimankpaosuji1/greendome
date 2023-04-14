import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../../asset/img/logo.png';
import "./footer.css";

function Footer() {
  return (
    <section className="footer" id="home">
      <Container>
        <Row className="align-items-center row">
          <Col xs={12} md={3} className="col1">
            <img src={logo} alt="Logo" />
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={12} md={3} className="col1">
            <h5>Products</h5>
            <p>features</p>
            <p>GreenDome Method</p>
            <p>Subscribe to our news letter</p>
          </Col>
          <Col xs={12} md={3} className="col1">
            <h5>Company</h5>
            <p>About Us</p>
            <p>Blog</p>
            <p>Enterprise</p>
          </Col>
          <Col xs={12} md={3} className="col1">
            <h5>Resources</h5>
            <p>Contact Us</p>
            <p>Terms of Service</p>
            <br />
          </Col>
        </Row>
        <hr/>
        <Row>

        </Row>
      </Container>
    </section>
  );
}

export default Footer;
