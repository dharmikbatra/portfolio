import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import ytbImg from "../../Assets/youtube-icon.webp"

function AboutCard() {
  const openytb = () => {
    window.location.replace("https://youtu.be/RqlR5yBysnQ");
  }

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Dharmik Batra </span>
            from <span className="purple"> Haryana, India.</span>
            <br />I am a working professional at CISCO Systems and have a Computer Science degree from BITS Pilani
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
              <ImPointRight /> Stand Up Comedy <a href="/" onClick={openytb}><img src={ytbImg} alt="ytb" className="img-fluid" height={37} width={37}/></a>
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
