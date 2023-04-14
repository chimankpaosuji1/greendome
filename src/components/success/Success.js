import React, {useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import photo from "../../asset/img/photo.png";
import photo1 from "../../asset/img/photo1.png";
import "./success.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Success() {

    const [name, setName] = useState("");    

    const savedata = () => {
      const register = JSON.parse(localStorage.getItem("register"));

      setName(`${register.firstname} ${register.surname}`);
      

      const userdata = {
        firstname: register.firstname,
        surname: register.surname,
        
      };
    };
    useEffect(() => {
      savedata();
    }, []);

  return (
    <section className="success" id="success">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>Congratulations {name} </h1>
            <p>
              Your payment has been successfully rececived Click below to
              Proceed
            </p>
            <Button variant="success">Proceed</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Success;