import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="source-code">
        <a
          href="https://github.com/scassady8/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by Shannon Cassady
      </p>
    </div>
  );
}
