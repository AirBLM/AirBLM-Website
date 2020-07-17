import React, { useEffect, useState } from "react";
import { apiUrl, paths } from "../../apiConfig";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Link,
  Box,
  Grid,
} from "@material-ui/core";

import SocialIcons from "../SocialIcons";
import "./GetInvolved.css";

const GetInvolveds = (props) => {
  const [getInvolveds, setGetInvolveds] = useState([]);

  useEffect(() => {
    fetch(apiUrl + paths.getInvolveds + process.env.REACT_APP_AIRTABLE_API_KEY)
      .then((res) => res.json())
      .then((data) => {
        setGetInvolveds(data.records);
        console.log(data.records);
      })
      .catch(console.error);
  }, []);

  const GetInvolvedCard = getInvolveds.map((el) => (
    <Card variant="outlined" className="getInvolved-card" key={el.id}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {el.fields.Name}
        </Typography>
        <Typography variant="body2" align="left">
          {el.fields.Description}
        </Typography>

        {el.fields.Email ? (
          <Box mt={2}>
            <Typography variant="subtitle2" align="left">
              Contact:{" "}
              <Link variant="body2" href={`mailto:${el.fields.Email}`}>
                {el.fields.Email}
              </Link>
            </Typography>
          </Box>
        ) : null}
      </CardContent>
      <CardActions className="getInvolved-btn">
        <Button
          variant="contained"
          color="primary"
          size="small"
          href={el.fields.Link}
          target="_blank"
        >
          Visit Website
        </Button>
        {SocialIcons(el.fields["Social Media"])}
      </CardActions>
    </Card>
  ));

  return (
    <div>
      <h1>Get Involved</h1>
      <Grid container direction="row" justify="space-evenly">
        {GetInvolvedCard}
      </Grid>
    </div>
  );
};

export default GetInvolveds;
