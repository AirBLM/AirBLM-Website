import React from "react";
import background from "../assets/image.jpg";

import { Container, useMediaQuery } from "@material-ui/core/";
import { useTheme } from "@material-ui/core/styles";

import "./Welcome.css";

// home page content

const Welcome = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      {xs ? (
        <Container className="Welcome">
          <div className="text">
            <p>Your new source of BLM information.</p>
            <p>Click on resources to get started. </p>
          </div>
          <img src={background} alt="" className="img" />
        </Container>
      ) : (
        <Container className="Welcome">
          <img src={background} alt="" className="img" />
          <div className="text">
            <p>Your new source of BLM information.</p>
            <p>Click on resources to get started. </p>
          </div>
        </Container>
      )}
    </>
  );
};

export default Welcome;
