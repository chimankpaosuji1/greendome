import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./degree.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Degree() {
  return (
    <section className="degree" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Faculties and Courses </h1>
            <div className="button">
              <button>Popular</button>
              <button>MBA</button>
              <button>Data Science</button>
              <button>Computer Science</button>
              <button>Engineering</button>
              <button>Cyber Security</button>
              <button>Law</button>
              <button>Information Management</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} className="col1">
            <Card className="card1 card">
              <Card.Body>
                <Card.Title className="h1">Artificial Intelligence</Card.Title>
                <Card.Text className="p">Faculty of Science</Card.Text>
                <Button variant="primary" className="but">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card2">
              <Card.Body>
                <Card.Title className="h1">Computer Science</Card.Title>
                <Card.Text className="p">Faculty of Science</Card.Text>
                <Button variant="primary" className="but">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card3">
              <Card.Body>
                <Card.Title className="h1">Information Technology</Card.Title>
                <Card.Text className="p">Faculty of Technology</Card.Text>
                <Button variant="primary" className="but">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} className="col2">
            <button className="but2">Explore more Faculties and Courses</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Degree;
