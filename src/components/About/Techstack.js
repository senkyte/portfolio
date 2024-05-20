import { Col, Row,OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import React from 'react';
import {
  DiJavascript1,
  DiPython,
} from "react-icons/di";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Initially attempted to learn C++ through Code4SG, but failed. Ended up self learning through Codebreaker problems.</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Learnt JavaScript using Codecademy. It was very similar to Python, albeit a few syntax differences, hence it was easy to pick up.</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Learnt Python as part of my ICT and Computing+ Syllabus from Sec 2 to 4, while actively practising outside my curriculum using CodeWars (5 kyu) and HackerRank.</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
