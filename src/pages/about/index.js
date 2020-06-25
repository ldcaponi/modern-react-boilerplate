import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      About page
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}

export default About;
