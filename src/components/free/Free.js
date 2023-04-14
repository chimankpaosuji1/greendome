import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./free.css";

function Free() {
  return (
    <section className="free" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Start Learning With Free Courses </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} className="col1">
            <Card className="card1 card">
              <Card.Body>
                <Card.Title className="h1">
                  Understanding human Behaviour
                </Card.Title>
                <Card.Title className="h1">
                  Theories, Patterns and Developments
                </Card.Title>
                <Card.Text className="p">
                  Perspective on Cognitive Psychology
                </Card.Text>
                <Card.Text className="p">Course</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card2">
              <Card.Body>
                <Card.Title className="h1">
                  The Science of Being Great
                </Card.Title>
                <Card.Text className="p">
                  Your Guide to a Successful Life
                </Card.Text>
                <Card.Text className="p">Course</Card.Text>
                <br />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card3">
              <Card.Body>
                <Card.Title className="h1">Rich Dad Poor Dad</Card.Title>
                <Card.Text className="p">
                  What the rich teach their kids about money that the poor and
                  middleclass do not! that the poor and middleclass do not!
                </Card.Text>

                <Card.Text className="p">Course</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} className="col2">
            <button className="but2">Explore more Courses</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Free;
