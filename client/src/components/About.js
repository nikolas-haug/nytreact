import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>About text</p>
      <p><Link to="/sharks">Go to sharks</Link></p>
    </div>
  )
}

export default About;