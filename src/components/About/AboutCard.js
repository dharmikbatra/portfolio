import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const timelineItems = [
  {
    period: "Jul 2025 - Present",
    title: "Software Engineer, Toast Inc.",
    details:
      "Building and scaling high-volume payment and payout systems on the Payments team.",
  },
  {
    period: "Founder Journey",
    title: "Cloud Kitchen -> NoStag",
    isFounderJourney: true,
    details:
      "Started with a cloud kitchen venture and now building NoStag, a trust-based nightlife marketplace powered by secure escrow and instant payout architecture.",
  },
  {
    period: "Aug 2023 - Jul 2025",
    title: "Software Engineer, Cisco Systems",
    details:
      "Built backend services and IOS-XR features focused on networking reliability.",
  },
  {
    period: "Jan 2023 - Jun 2023",
    title: "Software Engineering Intern, Cisco Systems",
    details:
      "Worked on automation and large-scale sanity check workflows.",
  },
  {
    period: "2019 - 2023",
    title: "B.E. (Hons), Computer Science, BITS Pilani",
    details: "Completed a 4-year engineering degree in Computer Science.",
  },
];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Dharmik Batra </span>
            from <span className="purple">Haryana, India.</span>
            <br />
            I am a second-time founder and Software Development Engineer on the
            Payments team at Toast Inc., with experience across fintech
            infrastructure, networking systems, and startup execution.
            <br />
            <br />
            Here&apos;s my journey so far (latest first):
          </p>
          <ul className="about-timeline-list">
            {timelineItems.map((item) => (
              <li className="about-timeline-item" key={item.period + item.title}>
                <div className="about-timeline-dot">
                  <ImPointRight />
                </div>
                <div className="about-timeline-content">
                  <span className="about-timeline-period">{item.period}</span>
                  <h6 className="about-timeline-title">
                    {item.isFounderJourney ? (
                      <>
                        Cloud Kitchen -&gt; <span className="purple">NoStag</span>
                      </>
                    ) : (
                      item.title
                    )}
                  </h6>
                  <p className="about-timeline-details">{item.details}</p>
                </div>
              </li>
            ))}
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
