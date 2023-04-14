import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./task.css";

function Task() {
  return (
    <section className="task" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Explore Greendome </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} className="col1">
            <Card className="card1 card">
              <Card.Body>
                <Card.Title className="h1">Tasks</Card.Title>
                <Card.Text className="p">
                  <ul>
                    <li>Download</li>
                    <li>Upload Credentials</li>
                    <li>Exam Timetable</li>
                    <li>Admissions</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card2">
              <Card.Body>
                <Card.Title className="h1">More Tasks</Card.Title>
                <Card.Text className="p">
                  <ul>
                    <li>Appply for Admission</li>
                    <li>Continue after Payment</li>
                    <li>Renew Your Enrollment</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="col1">
            <Card className="card3">
              <Card.Body>
                <Card.Title className="h1">Surveys and Forms</Card.Title>
                <Card.Text className="p">
                  <ul>
                    <li>E-learning Security Survey</li>
                    <li>Service Security in Greendome</li>
                    <li>Cyber Seccurity Awareness</li>
                    <li>Apply for Admission</li>
                    <li>Greendome Alumni Form</li>
                  </ul>
                </Card.Text>
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

export default Task;
