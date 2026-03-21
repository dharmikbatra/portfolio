import React from "react";

const tools = ["IntelliJ IDEA", "Visual Studio Code", "XCode", "Postman", "GitHub", "Docker", "CursorAI", "DevinAI", "Claude Code", "ChatGPT", "PgAdmin4", "DBeaver"];

function Toolstack() {
  return (
    <div className="skills-chip-container tools-chip-container">
      {tools.map((tool) => (
        <span key={tool} className="skills-chip">
          {tool}
        </span>
      ))}
    </div>
  );
}

export default Toolstack;
