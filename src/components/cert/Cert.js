import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cert from "../../asset/img/cert.png";
import "./cert.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Cert() {
  return (
    <section className="cert" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Recommended Professional Certificates </h1>
            <img src={cert} alt="cert" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cert;
