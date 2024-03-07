import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TradingViewWidget from '../components/Chart/Graph';
import BitCoin from "../components/BitCoin";
import TokeNomics from "../components/TokeNomics";
import Team from "../components/Team";

function Home() {
  return (
    <>
      <Container fluid="md" >
        <Row>
          <Col md={9}>
            {/* <TradingViewWidget/> */}
            
          </Col>
          <Col md={3}>hello1</Col>
        </Row>
          <Row >
            <Col md={9}>
              <BitCoin/>
              <TokeNomics/>
              <Team/>
            </Col>
            
          </Row>
        
      </Container>
    </>
  );
}

export default Home;
