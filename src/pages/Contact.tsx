import { Button, Col, Container, Form, Row } from "react-bootstrap";
import image from "../resources/envelope.jpg";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Container className="fluid mt-5 p-4 bg-dark shadow-lg rounded">
        <Row>
          <Col className="text-center">
            <h1>Get in touch</h1>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5">
          <Col md="4" className="d-flex justify-content-center">
            <img
              id="envelope"
              src={image}
              alt=""
              className="mb-3 align-content-center"
            />
          </Col>
          <Col md="7">
            <p className="text-light fs-5">
              Any order requires previous discussion about specific design and
              price.
              <br />
              <br />
              <a
                className="text-decoration-none"
                href="mailto:ana.florescu@ulbsibiu.ro"
              >
                Send me an email: ana.florescu@ulbsibiu.ro
              </a>
              <br />
              My phone number: 0123456789
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
