import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import perse from "../../Assets/Projects/perse.png";
import vague from "../../Assets/Projects/vague.png";
import cisco from "../../Assets/ciscocybersec.png";
import hackerrank from "../../Assets/Projects/hackerrank.png";
import noi from "../../Assets/Projects/noi.png";
import ai from "../../Assets/Projects/ai.png";

function Projects2() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Other Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my certifications not related to coding.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackerrank}
              isBlog={false}
              title="Edusave Award for Achievement, Good Leadership and Service (EAGLES)"
              description="Up to 15% of students from each secondary school who have demonstrated good conduct, and one or more of the following: (i) leadership qualities, (ii) service to community and schools, (iii) excellence in non-academic activities or, (iv) 21st Century Competencies in a consistent and exemplary manner."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="Historical Scene Investigation Challenge 2022 Silver"
              description="Achieved Silver award in the Historical Scene Investigation Challenge 2022 organized by the National Library Board."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cisco}
              isBlog={false}
              title="3M Innoscience Challenge Best Presentation 2021"
              description="Since 2015, 3M has partnered the School of Science and Technology, Singapore (SST) in the SST-3M InnoScience Challenge, which aims to inspire millennials to develop innovative ideas that could have a positive impact on our community and our future."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects2;
