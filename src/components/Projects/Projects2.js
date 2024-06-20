import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reconomy from "../../Assets/Projects/reconomy.png";
import perform from "../../Assets/Projects/perform.jpeg";
import iss from "../../Assets/Projects/iss.png";
import scam from "../../Assets/Projects/scam.jpeg"

function Projects2() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Other <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my non IT-related projects I've worked on recently. All demo links lead to my Linkedin project section, where it contains all files attached to each project.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iss}
              isBlog={false}
              title="Investigative Skills in Science"
              description="At the start of 2022, I had a project with 2 other people to research about an interesting topic. My team chose the investigation of the noise produced under different traffic conditions.This project is definitely not my proudest work, but I learnt many things from this project, such as how to conduct experiments, and write a scientific paper. The demo link below links to my Linkedin projects, where the proposal document and video are attached."
              demoLink="https://www.linkedin.com/in/alexanderkohsst/details/projects/?profileId=ACoAADag9soBh-jyrF2yfXo53Kpq1qe4BQANuoQ"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perform}
              isBlog={false}
              title="SAW Performance 2023"
              description="This Taekwondo performance was coordinated and organised by me and the other Taekwondo Excos. As our coach was not around for that period of time, I had to plan and teach the new Secondary One members how to perform Taegeuk 5, or the Blue Belt pattern, while they were only white belt. It took a large amount of time and effort, as everyone had their own struggles and difficulties. However, even as we had to make a drastic change to who was holding the board just one day before the final performance, we managed to pull off one of the greatest performances in Taekwondo, with the little resources we had."
              demoLink="https://www.linkedin.com/in/alexanderkohsst/details/projects/?profileId=ACoAADag9soBh-jyrF2yfXo53Kpq1qe4BQANuoQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scam}
              isBlog={false}
              title="The ScamShield Initative"
              description="Helped organise and planned a volunteer workshop that teaches elderlies to detect and prevent scams, as part of the Hwa Chong Institution Service Learning Fellowship. I was the group leader, and we taught the elderlies about common scam tactics, how to identify signs of a scam, and steps to take if they encounter one. This project helped spread awareness about scams to the vulnerable elderly community, and the first session took place at the NTUC Care Bukit Batok West Centre."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects2;
