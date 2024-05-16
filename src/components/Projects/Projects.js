import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reconomy from "../../Assets/Projects/reconomy.png";
import brain from "../../Assets/Projects/brain.png";
import portstolio from "../../Assets/Projects/portstolio.png";
import textfight from "../../Assets/Projects/textfight.png";
import bottle from "../../Assets/Projects/bottledetector.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portstolio}
              isBlog={false}
              title="My Portfolio"
              description="Used an open source portfolio template to create my portfolio which shows my skills and achievements. Credits to Soumyajit Behera for the template."
              ghLink="https://github.com/senkyte/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bottle}
              isBlog={false}
              title="The BottleDetectorinator"
              description="Trained in Tensorflow and Teachable Machine, the BottleDetectorinator is a web app that detects whether a clear plastic bottle is clean, dirty, or not a bottle at all, only giving answers when it has over 90% accuracy. It has a dataset of thousands of dirty bottles and hundreds of clean bottles. Featured on Celebrations@SST."
              ghLink="https://github.com/senkyte/BottleDetectorinator"
              demoLink="https://bottledetectorinator.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Big Brained Generator"
              description="Used OpenAI and Python to generate questions to test understanding by inputting notes. This promotes active learning and helps in learning new concepts."
              ghLink="https://github.com/senkyte/bigbrainedgenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reconomy}
              isBlog={false}
              title="Reconomy"
              description="Created an app that gave tutorials to dismantle broken electronics to recycle, along with a forum to post questions and chat with the community."
              demoLink="https://drive.google.com/file/d/12FFjIBUKh5vQx_buE77eRHXi5JTo2Iyb/view" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textfight}
              isBlog={false}
              title="TextFighter"
              description="A simple text fighter created in Secondary 2 using basic Python functions such as random number generation and if/else statements. The goal was to practice logical thinking and basic programming concepts."
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
