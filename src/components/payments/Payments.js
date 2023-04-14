import React, {useEffect, useState } from "react";
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
import { Paystack } from "../paystack/Paystack";
import "./payments.css";

function Payments() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState({});

  const [phone, setPhone] = useState("");


  const savedata = () => {
    const register = JSON.parse(localStorage.getItem("register"));
    // console.log(register);

    setName(`${register.firstname} ${register.surname}`);
    setEmail(register.email);
    setAmount(7500);
    setPhone(register.phone);

    const userdata = {
      firstname: register.firstname,
      surname: register.surname,
      email: register.email,
      amount: 7500
    };
  };
  useEffect(() => {
    savedata();
  }, []);



  const handleSubmit = () => {
     const register = JSON.parse(localStorage.getItem("register"));
    console.log(register.email);
     console.log(register.amount);
    Paystack(register.email, parseFloat(register.amount));
    
  }


   const handleChange = (e) => {
     setData({
       ...data,
       [e.target.name]: e.target.value,
     });
   };
  return (
    <section className="payments" id="home">
      <Container>
        <Row className="align-items-center">
          <h1>PAYMENT FOR COURSE APPLICATION FORM</h1>
          <Col xs={12} className="col1">
            <Form.Group className="mb-3 form-group">
              <Form.Label className="formlabel">Applicant </Form.Label>
              <Form.Control
                placeholder={name}
                disabled
                value={name}
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label className="formlabel">Email </Form.Label>
              <Form.Control
                placeholder={email}
                disabled
                value={email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label className="formlabel">Phone Number </Form.Label>
              <Form.Control placeholder={phone} disabled />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label className="formlabel">Amount </Form.Label>
              <Form.Control
                placeholder={amount}
                disabled
                name="amount"
                value={amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label className="formlabel">Payment Type</Form.Label>
              <Form.Select disabled>
                <option>BANK BRANCH</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label className="formlabel"> </Form.Label>

              <Button
                variant="success"
                className="but35"
                onClick={handleSubmit}
              >
                Pay
              </Button>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Link to="/prepdone" className="outreach-button">
            <Button variant="light" className="but34">
              Back
            </Button>
          </Link>
        </Row>
      </Container>
    </section>
  );
}

export default Payments;
