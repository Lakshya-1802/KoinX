import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TradingViewWidget from "../components/Graph";
import img1 from "../assets/images/Designer girl-cuate.png";
import axios from "axios";
import { url, token } from "../port";
import BitCoin from "../components/BitCoin";
import TokeNomics from "../components/TokeNomics";
import Team from "../components/Team";
import Bar from "../components/Bar";
import CoinSlider1 from "../components/Slider1";
import CoinSlider2 from "../components/Slider2";
import Sentiments from "../components/Sentiments";
import Performance from "../components/Performance";

function Home() {
  const [top3Coins, setTop3Coins] = useState([]);

  const fetchtop3 = async () => {
    try {
      const res = await axios.get(`${url}/search/trending?${token}`);
      const { coins } = res.data;
      console.log(coins, "coins");
      const sortedCoins = coins.sort(
        (a, b) => a.item.market_cap_rank - b.item.market_cap_rank
      );

      setTop3Coins(sortedCoins.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchtop3();
  }, []);

  console.log(top3Coins, "top");
  return (
    <>
      <Container fluid>
        <div className="mx-4 ">breadcrumbs{">>"}</div>
        <Row>
          <Col md={9}>
            {/* <TradingViewWidget /> */}
            <Bar />
            <Performance />
            <Sentiments />
            <BitCoin />
            <TokeNomics />
            <Team />
          </Col>
          <Col md={3} style={{ margin: "1rem 0" }}>
            <Row
              style={{
                backgroundColor: "blue",
                borderRadius: "10px",
                padding: "1.1rem",
                margin: "1rem 0",
                textAlign: "center",
              }}
            >
              <div className="text-center fs-3 text-light fw-bold ">
                <span>Getting Started with KoinX for FREE</span>
              </div>
              <div className="text-center text-light mt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam doloremque obcaecati corporis maxime
                </p>
              </div>
              <div className="mb-3 px-5">
                <img
                  src={img1}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="mb-3">
                <Button
                  className="fw-semibold"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Get Started for FREE -{">"}
                </Button>
              </div>
            </Row>
            <Row
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                margin: "1rem 0",
                padding: "1rem 0",
              }}
            >
              <div className="fs-5 fw-semibold w-100 mb-3">
                Trending Coins (24H)
              </div>
              {top3Coins?.map((item, index) => (
                <Row
                  className="my-1"
                  key={index}
                  style={{ alignItems: "center" }}
                >
                  <Col xs={2} md={2} className="text-center">
                    <img
                      src={item.item.small}
                      width="100%"
                      height="40px"
                      alt={item.item.name}
                    />
                  </Col>
                  <Col xs={6} md={6} className="fw-semibold">
                    {item.item.name}
                  </Col>
                  <Col
                    xs={4}
                    md={4}
                    className="text-center"
                    style={{
                      backgroundColor:
                        item.item.data.price_change_percentage_24h.usd < 0
                          ? "#ffc0cb"
                          : "#cefad0",
                      borderRadius: "5px",
                      color:
                        item.item.data.price_change_percentage_24h.usd < 0
                          ? "#ff0000"
                          : "#008631",
                    }}
                  >
                    {item.item.data.price_change_percentage_24h.usd < 0
                      ? "▼"
                      : "▲"}{" "}
                    {Math.abs(
                      item.item.data.price_change_percentage_24h.usd
                    ).toFixed(2)}{" "}
                    %
                  </Col>
                </Row>
              ))}
            </Row>
          </Col>
        </Row>

        <Row>
          <div style={{ backgroundColor: "white" }}>
            <CoinSlider1 />
            <CoinSlider2 />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
