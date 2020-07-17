import React from "react";
import "./About.css";
import Team from "./Team_Photo";
import Scott from "../assets/Scott.jpg";
import Eden from "../assets/image.jpg";
import Ying from "../assets/Ying.jpg";
import Emily from "../assets/Emily.jpg";

const About = () => {
  return (
    <div>
      <div className="About_title">
        <h1>About</h1>
      </div>
      <div className="About">
        <Team photo={Scott} name="Scott Blender" title="Project Lead"></Team>
        <Team photo={Eden} name="Eden Brunner" title="Airtable"></Team>
        <Team
          photo={Ying}
          name="Ying Songsana"
          title="Frontend Developer"
        ></Team>
        <Team photo={Emily} name="Emily Kwak" title="Frontend Developer"></Team>
      </div>
      <div className="About_email">
        <p> For further questions, email us at airblm@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
