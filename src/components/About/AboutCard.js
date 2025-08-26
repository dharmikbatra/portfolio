import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import ytbImg from "../../Assets/youtube-icon.webp"
import Button from "react-bootstrap/Button";


function AboutCard() {
  // const openytb = () => {
  //   window.location.href = "https://youtu.be/8wabbfcnlu0";
  // }

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Dharmik Batra </span>
            from <span className="purple"> Haryana, India.</span>
            <br />I am a Software Developer at Toast Inc. and have a Computer Science degree from BITS Pilani
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Writing
            </li>
            <li className="about-activity" >
              <ImPointRight /> Stand Up Comedy
              {/* <a
                target="_blank"
                href="/redirect"
                >
                  <img src={ytbImg} alt="ytb" className="img-fluid" height={37} width={37}/>
              </a> */}
              <Button
                href="https://youtu.be/8wabbfcnlu0"
                target="_blank"
                className="ytb-btn"
              >
                 <img src={ytbImg} alt="ytb" className="ytb-img"/>
              </Button>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dharmik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
