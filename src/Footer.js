import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="source-code">This project was coded by {" "}<a
          href="https://github.com/scassady8"
          target="_blank"
          rel="noopener noreferrer"
        >Shannon Cassady</a>{" "} and is{" "}
        <a
          href="https://github.com/scassady8/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source code
        </a>.
      </p>
    </div>
  );
}
