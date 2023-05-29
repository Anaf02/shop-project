import { Button, Col, Container, Row } from "react-bootstrap/";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function goToShop() {
    navigate("/shop");
  }

  return (
    <Container className="center">
      <Row className="mt-5">
        <Col>
          <br />
          <h1 className="text-center color-white font-xl">
            Welcome to The Bea Hive!
          </h1>
          <br />
          <p className="text-center color-white font-lg">
            I create unique and personalized designs based on your desires and
            needs
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button
            onClick={goToShop}
            variant="outline-dark"
            size="lg"
            className="text-light text-center"
          >
            Shop now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
