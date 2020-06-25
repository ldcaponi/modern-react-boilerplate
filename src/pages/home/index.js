import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      Home page
      <p>
        <Link to="/about">Go About</Link>
      </p>
    </div>
  );
}

export default Home;
