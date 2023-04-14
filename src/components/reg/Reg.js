import React, {useState} from "react";
import { Col, Container, Row, Card, Button, Modal, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./reg.css";

function Reg() {

   const [show, setShow] = useState(false);
   const [data, setData] = useState();


   const [firstname, setFirstname] = useState("");
   const [surname, setSurname] = useState("");
   const [gender, setGender] = useState("");
   const [email, setEmail] = useState("");
   const [date, setDate] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");


   const handleSubmit = (e) => {
    e.preventDefault();       
    };


    const nextPage = () => {
      let register= {
        firstname: firstname,
        surname: surname,
        gender: gender,
        email: email,
        date: date,
        address: address,
        amount: 7500,
        phone: phone

      }
      localStorage.setItem("register", JSON.stringify(register));
      window.location="/prepdone"
    }


      

    
   
   const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <section className="reg" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="col1">
            <h1>ENTRY REQUIREMENTS</h1>
            <h2>AGRICULTURAL ENGINEERING</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} className="col2">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th colSpan={2}>COMPULSORY O-LEVEL REQUIREMENTS</th>
                </tr>
                <tr>
                  <th colSpan={2}>
                    Credit passes in five subjects which must include the
                    following:
                  </th>
                </tr>
                <tr>
                  <th>subjects</th>
                  <th className="thright">Min Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chemistry</td>
                  <td>C6</td>
                </tr>
                <tr>
                  <td>English Language</td>
                  <td>C6</td>
                </tr>
                <tr>
                  <td>Mathematics</td>
                  <td>C6</td>
                </tr>
                <tr>
                  <th colSpan={2}>ACCEPTABLE A-LEVEL/IJMB SUBJECTS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ACCEPTABLE DIPLOMA RESULTS:</th>
                </tr>
                <tr>
                  <th colSpan={2}>ACCEPTABLE HIGHER DIPLOMA RESULTS:</th>
                </tr>
                <tr>
                  <td>Agric Extension Management</td>
                  <td>LC</td>
                </tr>
                <tr>
                  <td>Agric. Education</td>
                  <td>LC</td>
                </tr>
                <tr>
                  <td>Agricultural Engineering</td>
                  <td>LC</td>
                </tr>
                <tr>
                  <th colSpan={2}>ACCEPTABLE FIRST DEGREE RESULTS:</th>
                </tr>
                <tr>
                  <td>AGRICULTURAL COOPERATIVE & RURAL</td>
                  <td>THIRD CLASS</td>
                </tr>
                <tr>
                  <td>AGRICULTURAL ECONOMICS & EXTENSION</td>
                  <td>THIRD CLASS</td>
                </tr>
                <tr>
                  <td>AGRICULTURAL MANAGEMENT</td>
                  <td>THIRD CLASS</td>
                </tr>
                <tr>
                  <td>BIOLOGICAL/EARTH SCIENCE</td>
                  <td>THIRD CLASS</td>
                </tr>
                <tr>
                  <th colSpan={2}>ACCEPTABLE RESULTS:</th>
                </tr>
                <tr>
                  <th colSpan={2}>GRADUATION REQUIREMENTS:</th>
                </tr>
              </tbody>
            </Table>

            <div className="button">
              <Button variant="success" onClick={handleShow}>
                Apply
              </Button>
            </div>
          </Col>

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton className="header">
              <Modal.Title>Course Admission</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    autoFocus
                    autoComplete="on"
                    onInput={(e) => setSurname(e.target.value)}
                    value={surname}
                    required
                    name="surname"
                  />
                </Form.Group>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    autoComplete="on"
                    onInput={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="form-group "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Middle Name</Form.Label>
                  {/* <input
                    type="text"
                    required
                    placeholder="Middle Name"
                    onChange={handleChange}
                  /> */}
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    name="middlename"
                    autoComplete="on"
                  />
                </Form.Group>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    name="date"
                    autoComplete="on"
                    onInput={(e) => setDate(e.target.value)}
                    value={date}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Gender</Form.Label>
                  <select
                    className="form-control"
                    name="gender"
                    id="gender"
                    placeholder="Gender"
                    required=""
                    autoComplete="on"
                    onInput={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Form.Group>

                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Nationality</Form.Label>
                  <select
                    className="form-control"
                    name="nat"
                    id="nat"
                    required=""
                  >
                    <option value="">Select Nationality</option>
                    <option value="Nigerian">Nigerian</option>
                    <option value="NonNigerian">Non-Nigerian</option>
                  </select>
                </Form.Group>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    autoComplete="on"
                    onInput={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Phone Number"
                    name="phone"
                    autoComplete="on"
                    onInput={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </Form.Group>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="form-label">Home Address</Form.Label>
                  <Form.Control as="textarea" rows={3} name="address" />
                </Form.Group>
                <Form.Group
                  className="form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form-label">Course</Form.Label>
                  <Form.Control type="text" disabled autoFocus />
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  className="but33"
                  onClick={nextPage}
                >
                  Apply
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Row>
        <Row>
          <div className="button">
            <Link to="/admission" className="outreach-button">
              <Button variant="light">Back</Button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
}


export default Reg;
