import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { SiStreamlit } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const url2 = 'https://github.com/senkyte'
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <OverlayTrigger placement="bottom"
        overlay={<Tooltip>While I was doing my DISCOVER week in Republic Polytechnic, where I was learning Generative AI, I learnt how to use Streamlit as a quick app deployment for Python.  </Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiStreamlit />
        </Col>
      </OverlayTrigger>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open(url2, '_blank')} style={{cursor:'pointer'}}>
        <FaGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
