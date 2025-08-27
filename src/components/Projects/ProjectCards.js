import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { ImBlog } from "react-icons/im";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* 1. Wrap buttons in a div for centering */}
        <div className="card-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank">
            {props.isBlog ? <ImBlog /> : <BsGithub />} &nbsp;
            {props.isBlog ? "Read Blog" : "GitHub"}
          </Button>
          
          {/* 2. Modified logic: Show this button if demoLink exists */}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              {/* If it's a blog, show a GitHub icon. Otherwise, show the Demo icon. */}
              {props.isBlog ? <BsGithub /> : <CgWebsite />} &nbsp;
              {props.isBlog ? "GitHub" : "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;