import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import { FaJava,FaDatabase } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPandas,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-java">Java</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <FaJava />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-cpp">C++</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-js">JavaScript</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-nodejs">Node.js</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-react">React</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-databases">Databases</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <FaDatabase />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-git">Git</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-python">Python</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-socket">Socket Programming</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiSocketdotio />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;