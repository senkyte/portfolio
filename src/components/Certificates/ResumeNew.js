import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import perse from "../../Assets/Projects/perse.png";
import vague from "../../Assets/Projects/vague2.png";
import cisco from "../../Assets/ciscocybersec.png";
import hackerrank from "../../Assets/Projects/hackerrank.png";
import noi from "../../Assets/Projects/noi2.png";
import ai from "../../Assets/Projects/ai.png";
import Projects2 from "./Resume2";
import perse2 from '../../Assets/Projects/perse2.png'
function Projects() {
  return (
    <section>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My  <strong className="purple">Certifications </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are my certifications related to coding.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hackerrank}
                isBlog={false}
                title="Python (Basic)"
                description="A basic Python certification given by HackerRank"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ai}
                isBlog={false}
                title="Literacy In AI"
                description="Given by AI Singapore for completing the Literacy In AI course which covered foundational concepts in AI/ML."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cisco}
                isBlog={false}
                title="Cybersecurity Essentials"
                description="Completed a Cisco course about Cybersecurity Essentials."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={perse}
                isBlog={false}
                title="Perse Coding Competition Round 1 Merit 2023"
                description="Achieved Merit in the Perse Coding Competition Round 1 2023."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={noi}
                isBlog={false}
                title="NOI 2024"
                description="Obtained 200 points during NOI Qualifications. A difficult but fun challenge."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={vague}
                isBlog={false}
                title=" Hwa Chong Institution Siebersec CTF Challenge 2024" 
                description="My team, vague_reference, obtained First Blood for Sanity Check and 8th Place overall."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={perse2}
                isBlog={false}
                title="Perse Coding Competition Round 1 Merit 2024"
                description="My greatest regret. Instead of working with my teammate, we chose to do seperate questions individually. As the competition only allowed 1 device, I was unable to debug my solutions, which ended up costing the competition."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects2 />
    </section>
  );
}

export default Projects;
