import { Col, Container, Row } from "react-bootstrap";
import MenuBar from "./MenuBar";
import "./Layout.css";

interface Props {
  children: JSX.Element;
}

function Layout(props: Props) {
  return (
    <>
      <MenuBar></MenuBar>
      <Container className="fluid">
        <Row id="content" className="mt-4">
          <Col md="12">{props.children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
