import React, { Component } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Container, Grid } from "@material-ui/core/";
import "./Navbar.css";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Container>
        <Grid className="nav" container direction="row" alignItems="center">
          <Grid
            item
            md={4}
            className="nav-item "
            style={{ textDecoration: "none" }}
          >
            <Link to="/" class="nav-logo">
              AirBLM
            </Link>
          </Grid>
          <Grid
            container
            spacing={3}
            xs={9}
            md={7}
            direction="row"
            justify="flex-end"
          >
            <Grid item>
              <Link to="/resources">Resources</Link>
            </Grid>
            <Grid item>
              <Link to="/about-us">About Us</Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
