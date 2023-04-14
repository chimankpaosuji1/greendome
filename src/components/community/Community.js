import React from "react";
import { Col, Container, Row, Card} from "react-bootstrap";
import photo2 from "../../asset/img/photo2.png";
import photo1 from "../../asset/img/photo1.png";
import "./community.css";

function Community() {
  return (
    <section className="community" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>From The GreenDome Community </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} className="col1">
            <Card className="card1 card">
              <Card.Body>
                <Card.Text className="p">
                  <div className="ablum">
                    <img src={photo2} alt="photo2" />
                    <h3>Adrian Peters</h3>
                    <p>Stanford University</p>
                  </div>
                  <p>
                    This is a lorem ispum text and this describes the course and
                    what its about and how this application and the mentors have
                    helped him with his school and exams and even with job exams
                    and interviews that he has had to take and how his grades
                    while in school improved drastically after coming across
                    this wonderful application and the mentors.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="col1">
            <Card className="card1 card">
              <Card.Body>
                <Card.Text className="p">
                  <div className="ablum">
                    <img src={photo1} alt="photo1" />
                    <h3>Adrian Peters</h3>
                    <p>Stanford University</p>
                  </div>
                  <p>
                    This is a lorem ispum text and this describes the course and
                    what its about and how this application and the mentors have
                    helped him with his school and exams and even with job exams
                    and interviews that he has had to take and how his grades
                    while in school improved drastically after coming across
                    this wonderful application and the mentors.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} className="col2">
            <button className="but2">See More</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Community;
