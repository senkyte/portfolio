import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import styles from "./App2.module.css"
import "./App2.module.css"
import { ReactComponent as WorkIcon } from "./work.svg"
import { ReactComponent as SchoolIcon } from "./school.svg"
import Image from "react-bootstrap/Image";
import timelineElements from "./timelineElements"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

function Home3() {
  let workIconStyles = { background: "#06D6A0" }
  let schoolIconStyles = { background: "#f9c74f" }

  return (
    <div className={styles.container}>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map(element => {
          let isWorkIcon = element.icon === "work"
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <Image src={element.imgPath} fluid /> {/* Render the image */}
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Home3;
