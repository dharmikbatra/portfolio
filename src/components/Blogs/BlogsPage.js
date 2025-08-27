import React from "react";
import {Button, Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import jokeblog from "../../Assets/jokeblog.png";
import ccblog from "../../Assets/ccblog.png";
import BlogCard from "./Blogcard";
import ProjectCards from "../Projects/ProjectCards";

function Tweets() {
  const blogs = [
  {
    imgPath: jokeblog,
    title: "How to Write a Joke: The Art of Premise, Setup, and Punchline",
    description: "This article explains the essential structure of a joke—premise, setup, and punchline—and offers practical tips on timing, audience awareness, and engagement. It guides readers on crafting effective, surprising jokes that connect well with different audiences.",
    isBlog: true,
    ghLink: "https://medium.com/@batradharmik/how-to-write-a-joke-the-art-of-premise-setup-and-punchline-60dbcdf4b567",
    demoLink: "https://github.com/your-username/project-repo-for-blog-1" // <-- Add link for the second button
  },
  {
    imgPath: ccblog,
    title: "How to Start a Cloud Kitchen in an Aggregator-Dominant Food Industry",
    description: "This article offers a practical guide to succeeding with a cloud kitchen in India's aggregator-dominated food industry. It emphasizes balancing reliance on delivery apps with building direct customer channels, strong branding, great food photos, and strategic marketing to ensure profitability.",
    isBlog: true,
    ghLink: "https://medium.com/@batradharmik/how-to-start-a-cloud-kitchen-in-an-aggregator-dominant-food-industry-0faf54e29164", // Link for "Read Blog" button
    demoLink: "https://github.com/your-username/project-repo-for-blog-2" // <-- Add link for the second button
  }
];
  return (
    <>
    <Button
        variant="primary"
        href="https://medium.com/@batradharmik"
        target="_blank"
        style={{ position:'relative', width:'90%', marginTop:'4%'}}
        >
        &nbsp;Follow me on Medium
    </Button>
    <br/>
    
   {/* <Container fluid className="project-section"> */}
      <Container>
        {/* <p style={{ color: "white" }}>
          Here are a few articles I've written recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 2. Map over the blogs array */}
          {blogs.map((blog, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCards
                imgPath={blog.imgPath}
                isBlog={blog.isBlog}
                title={blog.title}
                description={blog.description}
                ghLink={blog.ghLink} // Pass the medium link to the ghLink prop
                // No demoLink prop needed for blogs
              />
            </Col>
          ))}
        </Row>
      {/* </Container> */}
    </Container>

    <Button
        variant="primary"
        href="https://medium.com/@batradharmik"
        target="_blank"
        style={{ position:'relative', width:'90%'}}
        >
        &nbsp;Follow me on Medium
    </Button>
    </>
  );
}
export default Tweets;


