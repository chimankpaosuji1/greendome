import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./prep.css";

function Prep() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const savedata =() => {
     const register = JSON.parse(localStorage.getItem("register"));
     console.log(register);

     setName(`${register.firstname} ${register.surname}`);
     setEmail(register.email);

     const userdata = {
      firstname: register.firstname,
      surname: register.surname,
      email: register.email,
     }
  }
  useEffect(() => {
    savedata();
  }, []);
 
  return (
    <section className="prep" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <p>
              Hello, <strong>{name}</strong>! You have chosen to apply for
              <strong> Agricultural Engineering</strong> in the Faculty of
              Engineering with Unique ID: for LAOSU1304100843. Your Reg ID for
              this application was sent to <strong>{email}</strong>. Please
              proceed to payment. Please note that the application fee for this
              programme is N7,500.00 (Seven Thousand, Five Hundred Naira Only).
            </p>
            <Link to="/payment" className="outreach-button">
              <Button variant="success">Proceed</Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Link to="/regpage" className="outreach-button">
            <Button variant="light" className="but34">
              Back
            </Button>
          </Link>
        </Row>
      </Container>
    </section>
  );
}

export default Prep;
