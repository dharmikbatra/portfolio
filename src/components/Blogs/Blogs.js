import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../Particle";
import Tweets from './Tweets'




function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs and Tweets </strong>
        </h1>
          <Tweets />
          {/* <BlogPage /> */}
      </Container>
    </Container>
  );
}

export default Blogs;
