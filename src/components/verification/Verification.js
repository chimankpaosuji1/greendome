import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./verification.css";

function Verification() {
  return (
    <section className="verification" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Online Verification requirements for New Students </h1>
            <div>
              <ul>
                <li>Birth Certificate</li>
                <li>First Deegre Certificates where applicable</li>
                <li>School Admission Letter</li>
                <li>Passport Size Photograph</li>
                <li>Upload a picture or passport of yourself</li>
                <li>Evidence of Payment Slip/ Reciept of Payment</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Verification;
