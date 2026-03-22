import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Technology Enthusiast",
          "Entrepreneur",
          "Standup Comedian"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay:30
      }}
    />
  );
}

export default Type;
