import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider from "react-slick";
import { MdInfo } from "react-icons/md";
import { Card, Row, Col } from "react-bootstrap";
import logo1 from "../assets/images/logo1.jpeg";
import logo2 from "../assets/images/logo2.jpeg";
import logo3 from "../assets/images/logo3.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Sentiments = () => {
  const percentage = 80;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="background mt-3 ">
      <div className="p-4 ">
        <p className="font-semibold text-3xl ">Sentiment</p>
        <p className="flex align-items-center text-slate-600 font-semibold text-2xl my-3">
          Key Events <MdInfo className="mx-1 mt-1" />
        </p>
        <Slider {...settings} className="mb-4">
          <div className="slick-slide">
            <Card className="bg-green-100 p-3">
              <Row>
                <Col md={2} className="text-center">
                  <img src={logo1} alt="Logo 1" className="mt-1" />
                </Col>
                <Col md={8}>
                  <Row className="mb-3 fw-semibold">
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis pariatur fugit aliquam praesentium
                        porro, quibusdam?
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit eaque quia obcaecati magni ducimus saepe sint
                        architecto veritatis dicta aut odio dolorem, atque
                        consequatur maxime nesciunt eius odit molestiae. Ducimus
                        porro architecto harum ad magnam.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
          <div className="slick-slide">
            <Card className="bg-red-100 p-3">
              <Row>
                <Col md={2} className="text-center">
                  <img src={logo2} alt="Logo 2" className="mt-1" />
                </Col>
                <Col md={9}>
                  <Row className="mb-3 fw-semibold">
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis pariatur fugit aliquam praesentium
                        porro, quibusdam?
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit eaque quia obcaecati magni ducimus saepe sint
                        architecto veritatis dicta aut odio dolorem, atque
                        consequatur maxime nesciunt eius odit molestiae. Ducimus
                        porro architecto harum ad magnam.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
          <div className="slick-slide">
            <Card className="bg-blue-100 p-3">
              <Row>
                <Col md={2} className="text-center">
                  <img src={logo3} alt="Logo 2" className="mt-1" />
                </Col>
                <Col md={9}>
                  <Row className="mb-3 fw-semibold">
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis pariatur fugit aliquam praesentium
                        porro, quibusdam?
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit eaque quia obcaecati magni ducimus saepe sint
                        architecto veritatis dicta aut odio dolorem, atque
                        consequatur maxime nesciunt eius odit molestiae. Ducimus
                        porro architecto harum ad magnam.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        </Slider>
        <p className="flex align-items-center text-slate-600 font-semibold text-2xl my-3">
          Analyst estimate <MdInfo className="mx-1 mt-1" />
        </p>
        <div className="flex gap-5 mb-3">
          <div
            className="col-md-3 col-sm-12"
            style={{ width: 200, height: 200 }}
          >
            <CircularProgressbar
              value={100}
              strokeWidth={50}
              text={`${76}%`}
              styles={buildStyles({
                textColor: "green",
                strokeLinecap: "butt",
                pathColor: "#D1FFBD",
              })}
            />
          </div>
          <div className=" col-md-9 col-sm-12 flex flex-col justify-center ">
            <div className="row flex ">
              <div className="col-md-1">BUY</div>
              <div className="col-md-9">
                <ProgressBar variant="success" now={76} />
              </div>
              <div className="col-md-1 text-success fs-5">76 %</div>
            </div>
            <div className="row flex">
              <div className="col-md-1">SELL</div>
              <div className="col-md-9">
                <ProgressBar variant="warning" now={20} />
              </div>
              <div className="col-md-1 text-warning fs-5">20 %</div>
            </div>
            <div className="row flex ">
              <div className="col-md-1">HOLD</div>
              <div className="col-md-9">
                <ProgressBar variant="secondary" now={4} />
              </div>
              <div className="col-md-1 text-secondary fs-5">4 %</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
