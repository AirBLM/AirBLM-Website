import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Resources from "./Components/Resources";
import About from "./Components/About";
import Petitions from "./Components/Petitions/Petitions";
import Donations from "./Components/Donations/Donations";
import GetInvoled from "./Components/GetInvolved/GetInvolveds";
import Articles from "./Components/Articles/Articles";

export default () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/resources" component={Resources} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/petitions" component={Petitions} />
    <Route exact path="/donations" component={Donations} />
    <Route exact path="/get-involved" component={GetInvoled} />
    <Route exact path="/articles" component={Articles} />
  </Switch>
);
