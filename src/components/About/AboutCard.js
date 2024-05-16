import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

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
            I have completed <Link to="/certificates" style={{ color: '#c770f0'}}>Cybersecurity Essentials </Link> by Cisco and <Link to="/project" style={{ color: '#c770f0'}}>Computing+</Link> at SST. Click the Streamlit icon to see my Streamlit portfolio! 
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
