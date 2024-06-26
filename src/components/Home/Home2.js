import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../Assets/logo.png';

function Home2() {
  return (
    <section>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently studying in the School of Science and Technology, and I enjoy coding and building things. Some of my favourite hobbies include playing rhythm games, watching anime and reading manga, and solving challenging coding problems.
              <br />
              <br />I have learnt languages like
              <i>
                <b className="purple"> C++, Javascript, HTML and CSS </b>
              </i>
              <br />I am fluent in
              <i>
                <b className="purple"> Python</b>
              </i>
              <br />
              <br />
              My field of interests are {"programming and web development"}
              <i>
                <b className="purple"> </b> and
                also in areas related to{" "}
                <b className="purple">
                  technopreneurship
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={logo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/senkyte"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> 
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alexanderkohsst/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}
export default Home2;
