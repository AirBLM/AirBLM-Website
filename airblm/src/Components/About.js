import React from "react";
import "./About.css";
import Team from "./Team_Photo";
import Scott from "../assets/Scott.jpg";
import Eden from "../assets/eden.jpg";
import Ying from "../assets/Ying.jpg";
import Emily from "../assets/Emily.jpg";
import Emily_K from '../assets/emily_k.jpeg'
import Maria from '../assets/maria.jpg'
import Maya from '../assets/Maya.jpg'

import Grid from "@material-ui/core/Grid";

const About = () => {
  return (
    <Grid className="About" container direction="column" alignItems="center" justify='space-between'>
      <h1>About</h1>
      <div className="About-grid">
        <Team photo={Scott} name="Scott Blender" title="Project Lead"></Team>
        <Team photo={Eden} name="Eden Brunner" title="Airtable"></Team>
        <Team
          photo={Ying}
          name="Ying Songsana"
          title="Frontend Developer"
        ></Team>
        <Team photo={Emily} name="Emily Kwak" title="Frontend Developer"></Team>
        <Team photo={Emily_K} name="Emily Kohlberg" title="Airtable"></Team>
        <Team photo={Maya} name="Maya Gerke" title="Social Media"></Team>
        <Team photo={Maria} name="Maria Izzi" title="Partnerships and Outreach"></Team>
      </div>
      <div className="About_email">
        <p> For further questions, email us at _airblm@gmail.com</p>
      </div>
    </Grid>
  );
};

export default About;
