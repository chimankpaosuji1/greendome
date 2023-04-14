import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./header.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Learn without limits</h1>
            <p>
              Start,switch and advance any career of your choice with over 3000
              courses , professsional certificates and deegrees from world-class
              universities and companies. Experience learning in a new
              dimension.
            </p>
            <div className="button">
              <button>Learn More </button>
              <button className='but2'>Try Greendome For Business </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header
