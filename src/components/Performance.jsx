import React from "react";
import { MdInfo } from "react-icons/md";
import { Card, Row, Col } from "react-bootstrap";

const Performance = () => {
  return (
    <div className="background mt-3 ">
      <div className="p-4 ">
        <p className="font-semibold text-3xl ">Performance</p>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <p className="flex align-items-center text-slate-600 font-semibold text-2xl my-3">
          FundaMentals <MdInfo className="mx-1 mt-1" />
        </p>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default Performance;
