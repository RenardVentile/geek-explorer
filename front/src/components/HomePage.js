import React from "react";
import { Container, Row, Col } from "reactstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 style={{ color: "white" }}>Welcome on GeekExplorer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
