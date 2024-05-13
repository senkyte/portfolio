import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alexander Koh </span>
            from <span className="purple">Singapore</span>
            <br />
            I am currently studying at School of Science and Technology, Singapore.
            <br />
            I have completed Cybersecurity Essentials by Cisco and Computing+ at SST. Click the Streamlit icon to see my Streamlit portfolio! 
            <br />
            <br />
            Apart from coding, some other activities that I love to do! 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Rhythm Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime and Reading Manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Coding Problems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work Smarter, Not Harder"{" "}
          </p>
          <footer className="blockquote-footer">Alexander Koh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
