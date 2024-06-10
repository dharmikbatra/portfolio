import React, { useState } from "react";
import {Container,  Nav} from "react-bootstrap";
import Particle from "../Particle";
import Tweets from './Tweets'
import BlogsPage from './BlogsPage'


function Blogs() {
  const [isTweetsActive, setIsStateActive] = useState(true)

  const changeToTweets =  (e) => {
    setIsStateActive(true)
  }

  const changeToBlogs =  (e) => {
    setIsStateActive(false)
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs and Tweets </strong>
        </h1>
        <Nav variant="tabs" style={{position:'relative'}}>
      <Nav.Item style={{width:"50%"}}>
        <Nav.Link onClick={changeToTweets} id={isTweetsActive?'active-blogs':'blogs'} className={isTweetsActive?'active':''}>Tweets</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{width:"50%"}}>
        <Nav.Link onClick={changeToBlogs} id={isTweetsActive?'blogs':'active-blogs'} className={isTweetsActive?'blogs':'active active-blogs'}>Blogs</Nav.Link>
      </Nav.Item>
    </Nav>
    <div style={{display:isTweetsActive?"":"none"}}><Tweets /></div>
    <div style={{display:isTweetsActive?"none":""}}><BlogsPage /></div>
      </Container>
    </Container>
  );
}

export default Blogs;
