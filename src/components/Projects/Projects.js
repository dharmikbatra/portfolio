import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import VentureCard from "./VentureCard";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatapp.png";
import preserve from "../../Assets/Projects/preserve.png";
import simon from "../../Assets/Projects/simon.png";
import lcsl from "../../Assets/Projects/lcsl.png";
import tourify from "../../Assets/Projects/Tourify.png";
import noStag from "../../Assets/Projects/nostag.png";
import mkc from "../../Assets/Projects/mkc.png";
const ventures = [
  {
    imgPath: noStag,
    title: "No Stag",
    description:
      "Two-way marketplace for couple matchup near clubs and bars (In Progress)",
    pageLink: "#",
  },
  {
    imgPath: mkc,
    title: "MKC (Marvelous Kitchen Creations)",
    description:
      "Cloud kitchen startup for delivering last minute, quick, and healthy meals to customers",
    pageLink:
      "https://www.linkedin.com/company/mkc-marvelous-kitchen-creations/about/",
  },
];

const personalProjects = [
  {
    imgPath: tourify,
    title: "Tourify",
    description:
      "Web application similar to Make My Trip where one can book the tours, review the tours. Admin can manage the bookings and add new tours very easily. It also has a integrated payment gateway ",
    ghLink: "https://github.com/dharmikbatra/MMT-clone",
    demoLink: "https://mmt-clone.onrender.com/",
  },
  {
    imgPath: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with node.js, Sockets and Material-UI. Have features which allows user for realtime messaging, location sharing.",
    ghLink: "https://github.com/dharmikbatra/node-chat-app",
    demoLink: "https://dharmikbatra-chat-app.herokuapp.com/",
  },
  {
    imgPath: preserve,
    title: "Preserve-Memories",
    description:
      "A online album like drive where user can save his memories with descrpition and tags along with the images. Build with React.js and Node.js which takes the content from user and stores it in MongoDB.",
    ghLink: "https://github.com/dharmikbatra/Preserve",
    demoLink: "https://elastic-leakey-dcd4c7.netlify.app/",
  },
  {
    imgPath: simon,
    title: "Simon Game",
    description:
      "Online game where users needs to remember a random color pattern whose length increases with every level Build with HTML, CSS, Javascript and JQuery",
    ghLink: "https://github.com/dharmikbatra/patgame/",
    demoLink: "https://dharmikbatra.github.io/patgame",
  },
  {
    imgPath: lcsl,
    title: "Leetcode Solutionare",
    description:
      "I have put all my coding solutions at one place for anyone who wants some help in coding",
    ghLink: "https://github.com/dharmikbatra/DSA/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <h2
          className="project-heading"
          style={{ fontSize: "1.75em", paddingTop: "10px", paddingBottom: "8px" }}
        >
          My <strong className="purple">Ventures</strong>
        </h2>
        <p style={{ color: "white", marginBottom: "1rem" }}>
          Products and businesses I&apos;m building.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          {ventures.map((venture, index) => (
            <Col md={4} className="project-card" key={venture.title + index}>
              <VentureCard
                imgPath={venture.imgPath}
                title={venture.title}
                description={venture.description}
                pageLink={venture.pageLink}
              />
            </Col>
          ))}
        </Row>

        <h2
          className="project-heading"
          style={{ fontSize: "1.75em", paddingBottom: "8px" }}
        >
          My <strong className="purple">Personal Projects</strong>
        </h2>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {personalProjects.map((project, index) => (
            <Col md={4} className="project-card" key={project.title + index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
