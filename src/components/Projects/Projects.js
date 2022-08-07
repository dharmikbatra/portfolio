import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatapp.png";
// import suicide from "../../Assets/Projects/suicide.png";
import preserve from "../../Assets/Projects/preserve.png";
import simon from "../../Assets/Projects/simon.png";
import lcsl from "../../Assets/Projects/lcsl.png";



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
              demoLink="https://dharmibatra.github.io/patgame"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lcsl}
              isBlog={false}
              title="Leetcode Solutionare"
              description="I have put all my coding solutions at one place for anyone who wants some help in coding"
              ghLink="https://github.com/dharmikbatra/DSA/"
              // demoLink="https://github.com/dharmikbatra/DSA/"
            />
          </Col>
        {/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
