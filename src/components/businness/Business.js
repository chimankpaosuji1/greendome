import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./business.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Business() {
  return (
    <section className="business" id="home">
      <div className="row">
        <Container>
          <Row className="align-items-center ">
            <Col xs={12} className="col1">
              <h1>GreenDome For Business </h1>
              <p>
                We’ve got the Solution: world-class training and development
                programs developed by top universities and Companies. Find
                solutions to any business problem that you have got all on
                GreenDome. Experience financial freedom and stability. We have
                helped over 700+ business and companies experience financial
                stability and freedom through our mentoring, classes and courses
                which are being taught on this application.
              </p>
              <div className="button">
                <button>GreenDome for Enterprise </button>
                <button className="but2">GreenDome for Teams</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Business
