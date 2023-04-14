import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import google from "../../asset/img/google.png";
import illinois from "../../asset/img/illinois.png";
import cam from "../../asset/img/cam.png";
import stanford from "../../asset/img/stanford.png";
import penn from "../../asset/img/penn.png";
import "./collab.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Collab() {
  return (
    <section className="collab" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <p>
              We collaborate with over 275+ leading universities and companies
              to ensure quality education
            </p>

            <div className="img">
              <img src={google} alt="Google" />
              <img src={illinois} alt="illinois" />
              <img src={cam} alt="cam" />
              <img src={stanford} alt="stanford" />
              <img src={penn} alt="penn" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Collab;
