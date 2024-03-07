import axios from "axios";
import React, { useEffect, useState } from "react";
import { token, url } from "../port";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "25px",
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "25px",
      }}
      onClick={onClick}
    />
  );
}

const CoinSlider1 = () => {
  const [coinsData, setCoinsData] = useState([]);

  const fetchCoins = async () => {
    try {
      const res = await axios.get(`${url}/search/trending?${token}`);
      setCoinsData(res.data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container >
      <div className="fw-bold fs-3 mb-1">You May Also Like</div>
      <Slider {...settings}>
        {coinsData.map((card) => (
          <Col key={card.item.coin_id} className="mb-5">
            <Card className="mx-1">
              <Card.Body>
                <Row>
                  <Col md={12} className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        src={card.item.small}
                        width={"25px"}
                        alt={card.item.symbol}
                      />
                      <span className="mx-2 text-medium">
                        {card.item.symbol}
                      </span>
                      <span
                        className={` ${
                          card.item.data.price_change_percentage_24h.usd > 0
                            ? "text-success"
                            : "text-danger"
                        }`}
                        style={{
                          backgroundColor:
                            card.item.data.price_change_percentage_24h.usd > 0
                              ? "#f0f7da"
                              : "pink",
                          borderRadius: "5px",
                          fontSize: "13px",
                        }}
                      >
                        {card.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="d-flex align-items-center">
                    <span className="mx-2 fs-4 fw-semibold">
                      {card.item.data.price}
                    </span>
                  </div>
                </Row>
                <Row>
                  <div>
                    <img
                      src={card.item.data.sparkline}
                      alt={card.item.symbol}
                      width={"100%"}
                    />
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Slider>
    </Container>
  );
};

export default CoinSlider1;
