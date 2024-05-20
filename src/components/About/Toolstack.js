import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { SiStreamlit } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const url = '//alexanderkoh-eportfolio.streamlit.app/'
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
        overlay={<Tooltip>Click me!</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons" onClick={() => window.open(url, '_blank')} style={{cursor:'pointer'}}>
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
