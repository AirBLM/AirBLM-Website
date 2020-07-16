import React from "react";
import Button from "@material-ui/core/Button";

const _Button = (props) => {
  return (
    <div>
      <Button variant="contained" color="secondary">
        {props.text}
      </Button>
    </div>
  );
};

export default _Button;
