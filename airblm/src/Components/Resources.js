import React from "react";
import { Link } from "react-router-dom";
import "./Resources.css";
import Button from "./Button";

function Resources() {
  return (
    <div className="Resources">
      <h1>Resources</h1>
      <p>View our national list of resources by category.</p>
      <Link className="Button" to="/petitions">
        <Button text="Petitions" />
      </Link>
      <Link className="Button" to="/donations">
        <Button text="Donations" />
      </Link>
      <Link className="Button" to="/get-involved">
        <Button text="Get Involved" />
      </Link>
      <Link className="Button" to="/articles">
        <Button text="Articles" />
      </Link>
    </div>
  );
}

export default Resources;
