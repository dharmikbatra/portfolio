import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiIntellijidea,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku
} from "react-icons/si";

import { FaGitSquare, FaDocker } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-intellij">IntelliJ IDEA</Tooltip>}
      >
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
       </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-vscode">Visual Studio Code</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-postman">Postman</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-git">Git/Github</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <FaGitSquare />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-docker">Docker</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <FaDocker />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
