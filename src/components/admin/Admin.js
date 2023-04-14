import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Dropdown,
  ListGroup,
  Modal
} from "react-bootstrap";
import logo2 from "../../asset/img/logo2.png";
import { Link } from "react-router-dom";
import "./admin.css";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import { HashLink } from 'react-router-hash-link';

function Admin() {
  const [myCar, setMyCar] = useState("0");
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);


  return (
    <section className="admin" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>ADMISSIONS </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} className="col1">
            <Card className="card">
              <Card.Title className="h1">GREENDOME ENGINEERING </Card.Title>
              <Card.Body className="card2">
                <Card.Text className="p">
                  <h3>FACULTIES</h3>
                  <p>Click on a Faculty to display its programmes</p>
                  <img src={logo2} alt="Logo2" />

                  <ListGroup variant="flush" className="listgroup">
                    <ListGroup.Item
                      className="list"
                      onClick={() => setModalShow(true)}
                    >
                      Faculty of Science
                    </ListGroup.Item>
                    {/* <Science
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> */}
                    <ListGroup.Item
                      className="list"
                      onClick={() => setModalShow(true)}
                    >
                      Faculty of Engineering
                    </ListGroup.Item>
                    <Engineering
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <ListGroup.Item className="list">
                      Faculty of Technology
                    </ListGroup.Item>
                    <ListGroup.Item className="list">
                      Faculty of Medicine
                    </ListGroup.Item>
                    <ListGroup.Item className="list">
                      Faculty of Agriculture
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <div className="button"></div>
            </Card>
          </Col>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Col xs={12} md={5} className="col1">
            <Card className="card1 card">
              <Card.Title className="h1">ADMISSION PROCESS</Card.Title>
              <Card.Body>
                <Card.Text className="p">
                  <ul>
                    <li>
                      An applicant for an undergraduate admission into Greendome
                      Engineering Sciences and Technology is expected to have a
                      minimum of 5 O-level credits including English and
                      Mathematics.{" "}
                    </li>
                    <li>
                      Additional requirements might apply for some programmes
                      and these can be viewed after selecting the programme and
                      entry level at the faculty’s admission page.
                    </li>
                    <li>
                      To apply for a programme select the Faculty,choose the
                      programme and entry level so that the view requirement
                      button is enabled. Clicking this button will reveal the
                      corresponding entry requirement and enable the apply
                      button on the pre-payment application page.
                    </li>
                    <li>
                      Fill in all the remaining details on the page before
                      submitting.
                    </li>
                    <li>
                      On successful submission of the pre-payment form, you are
                      re-directed to remita to obtain an RRR invoice which
                      should be used to effect payment for the application form.
                    </li>
                    <li>
                      An applicant who pays online using a payment card will
                      automatically obtain the online form which must be filled
                      before submission.
                    </li>
                    <li>
                      Applicants who pay through a bank branch must click on
                      continue after payment and enter their unique ID and
                      RRR.They are also given the opportunity to change the
                      programme they appplied for.
                    </li>
                    <li>
                      Applicants who had paid using an RRR generated last
                      semester or earlier must restart the application process
                      up to the point where they are redirected to remita. They
                      should now use the newly generated uniqueID with the old
                      RRR used for payment when they click proceed after payment
                      .
                    </li>
                    <li>
                      In all cases a successful payment will lead to the
                      generation of an online application form which should be
                      filled before submission online. The admission process is
                      automated and the outcome is virtually instatenous.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} className="col1">
            <Card className="card">
              <Card.Title className="h1">CONTACT GREENDOME</Card.Title>
              <Card.Body className="card3">
                <Card.Text className="p">
                  <img src={logo2} alt="Logo2" />
                  <p>
                    Greendome Engineering Sciences and Technology is a school
                    that practices love, respect and discipline of its students
                    and the staffs at large . Please feel free to contact us if
                    you need any help or have questions to ask. <br />
                    Our institution is built on the ability of our students to
                    come to us and freely lay complaints on any issues they
                    have. We are committed to making sure that our students feel
                    safe, loved and cherished. We listen to our students and
                    help assist them in anyway we can through scholarships,
                    grants and cash prizes when they perform exceptionally well.
                    This is a dummy text for an online mearning management
                    system for Greendome Engineering Sciences and Technology.
                    This text is used to practice the dummy text that will be
                    written once contents are being brought in.
                  </p>
                  <p>+23488899900045</p>
                  <p>greeendomeengscitech@gmail.com</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// function Science(props) {
//   return (
//     <Modal
//       {...props}
//       // size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton className="success">
//         <Modal.Title id="contained-modal-title-vcenter">
//           Faculty of Science
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="modalbody">
//         <h4>COURSES OFFERED</h4>
//         <p>Click on a Programme to view its entry requirements</p>
//         <p>
//           <ListGroup variant="flush" className="listgroup">
//             <ListGroup.Item className="list">Computer Science </ListGroup.Item>
//             <ListGroup.Item className="list">
//               Environmental Science{" "}
//             </ListGroup.Item>
//             <ListGroup.Item className="list">Mathematics </ListGroup.Item>
//             <ListGroup.Item className="list">
//               Biological Sciences{" "}
//             </ListGroup.Item>
//             <ListGroup.Item className="list">Chemistry </ListGroup.Item>
//             <ListGroup.Item className="list">Physics </ListGroup.Item>
            
//           </ListGroup>
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide} variant="success">
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

function Engineering(props) {


  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="success1">
        <Modal.Title id="contained-modal-title-vcenter">
          Faculty of Engineering
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalbody">
        <h4>COURSES OFFERED</h4>
        <p>Click on a Programme to view its entry requirements</p>
        <p>
          <ListGroup variant="flush" className="listgroup">
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Agric./Bioresources Engineering{" "}
              </ListGroup.Item>{" "}
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Civil Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Mechanical Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Electronic Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Metallurgical/Material Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Electrical Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Marine Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Aeronutical Engineering{" "}
              </ListGroup.Item>
            </Link>
            <Link to="/regpage">
              <ListGroup.Item className="list">
                Petroleum Engineering{" "}
              </ListGroup.Item>
            </Link>
            {/* <ListGroup.Item className="list"> Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Chemical Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Computer Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Automobile Engineering </ListGroup.Item>
              <ListGroup.Item className="list">Mechatronics Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Biomedical Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Food Engineering </ListGroup.Item>
              <ListGroup.Item className="list">Mining Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Structural Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Polymer & Textile Engineering </ListGroup.Item>  
              <ListGroup.Item className="list">Industrial and Production Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Petroleum and Gas Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Wood Production Engineering </ListGroup.Item> 
              <ListGroup.Item className="list">Agriculture and Environmental Engineering </ListGroup.Item>
              <ListGroup.Item className="list">Gas Engineering </ListGroup.Item>               */}
          </ListGroup>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="success">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Admin;
