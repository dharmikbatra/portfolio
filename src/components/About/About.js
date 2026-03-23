import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <div className="about-hobbies-card">
              <h4 className="about-hobbies-title">
                Beyond Work <span className="purple">&amp; Code</span>
              </h4>
              <ul className="about-hobbies-list">
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
                <li className="about-activity">
                  <ImPointRight /> Content Writing
                </li>
                <li className="about-activity">
                  <ImPointRight /> Playing Badminton
                </li>
                <li className="about-activity">
                  <ImPointRight /> Watching Bollywood Movies
                </li>
                <li className="about-activity">
                  <ImPointRight /> Stand Up Comedy
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
