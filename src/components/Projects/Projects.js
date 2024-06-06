import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatapp.png";
import preserve from "../../Assets/Projects/preserve.png";
import simon from "../../Assets/Projects/simon.png";
import lcsl from "../../Assets/Projects/lcsl.png";
import tourify from "../../Assets/Projects/Tourify.png"



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
              imgPath={tourify}
              isBlog={false}
              title="Tourify"
              description="Web application similar to Make My Trip where one can book the tours, review the tours. Admin can manage the bookings and add new tours very easily. It also has a integrated payment gateway "
              ghLink="https://github.com/dharmikbatra/MMT-clone"
              demoLink="https://mmt-clone.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with node.js, Sockets and Material-UI. Have features which allows user for realtime messaging, location sharing."
              ghLink="https://github.com/dharmikbatra/node-chat-app"
              demoLink="https://dharmikbatra-chat-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={preserve}
              isBlog={false}
              title="Preserve-Memories"
              description="A online album like drive where user can save his memories with descrpition and tags along with the images. Build with React.js and Node.js which takes the content from user and stores it in MongoDB."
              ghLink="https://github.com/dharmikbatra/Preserve"
              demoLink="https://elastic-leakey-dcd4c7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Game"
              description="Online game where users needs to remember a random color pattern whose length increases with every level Build with HTML, CSS, Javascript and JQuery"
              ghLink="https://github.com/dharmikbatra/patgame/"
              demoLink="https://dharmikbatra.github.io/patgame"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lcsl}
              isBlog={false}
              title="Leetcode Solutionare"
              description="I have put all my coding solutions at one place for anyone who wants some help in coding"
              ghLink="https://github.com/dharmikbatra/DSA/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
