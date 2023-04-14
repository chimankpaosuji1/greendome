import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import photo from "../../asset/img/photo.png";
import photo1 from "../../asset/img/photo1.png";
import "./active.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Active() {
  return (
    <section className="active" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>20,000+ </h1>
            <h1>Total active</h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="col1">
            <h1>8 </h1>
            <h1>Faculties</h1>
          </Col>
          <Col xs={12} md={4} className="col1">
            <h1>30 </h1>
            <h1>Departments</h1>
          </Col>
          <Col xs={12} md={4} className="col1">
            <h1>100 </h1>
            <h1>Programmes</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Active;
