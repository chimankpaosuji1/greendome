import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./course.css";

function Course() {
  return (
    <section className="course" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Courses you can complete in a Day </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} className="col1">
            <Card className="card1 card">
              <Card.Body>
                <Card.Title className="h1">
                  Machine Learning: Master supervised and Unsupervised Learning
                  Algorithms with Real Life Examples
                </Card.Title>
                <Card.Text className="p">Course</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card2">
              <Card.Body>
                <Card.Title className="h1">
                  Introduction to Programming: Learn to program in Java with
                  data structures, algorithms and Logic
                </Card.Title>
                <Card.Text className="p">Course</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card3">
              <Card.Body>
                <Card.Title className="h1">
                  Machine Learning: Master supervised and Unsupervised Learning
                  Algorithms with Real Life Examples
                </Card.Title>
                <Card.Text className="p">Course</Card.Text>
                
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

export default Course;
