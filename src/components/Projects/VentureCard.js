import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function VentureCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="card-buttons">
          <Button variant="primary" href={props.pageLink} target="_blank" rel="noreferrer">
            <CgWebsite /> &nbsp; Visit page
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VentureCard;
