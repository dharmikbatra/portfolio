import React from "react";
import { Col, Row } from "react-bootstrap";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java","Kotlin", "C++", "JavaScript", "Python"],
  },
  {
    title: "Frameworks",
    items: ["React", "React Native", "NodeJS", "Spring Boot", "Express", "NestJS", "Dropwizard"],
  },
  {
    title: "Backend",
    items: ["Socket Programming", "Databases", "REST API", "GraphQL", "Microservices", "API Gateway", "JWT", "Docker", "Kubernetes", "Git"],
  }
];

function Techstack() {
  return (
    <div className="skills-list-wrapper">
      {skillGroups.map((group) => (
        <Row key={group.title} className="skills-group-row">
          <Col xs={12} md={3} className="skills-group-title">
            {group.title}
          </Col>
          <Col xs={12} md={9} className="skills-chip-container">
            {group.items.map((item) => (
              <span key={item} className="skills-chip">
                {item}
              </span>
            ))}
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Techstack;