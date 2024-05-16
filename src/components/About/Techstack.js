import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import React from 'react';
import {
  DiJavascript1,
  DiPython,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>   
    </Row>
  );
}

export default Techstack;
