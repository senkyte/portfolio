import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiStreamlit } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const url = '//alexanderkoh-eportfolio.streamlit.app/'
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open(url, '_blank')} style={{cursor:'pointer'}}>
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
