import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TradingViewWidget from '../components/Chart/Graph';

function Home() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col md={9}>
            {/* <TradingViewWidget/>
             */}
          </Col>
          <Col md={3}>hello1</Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Home;
