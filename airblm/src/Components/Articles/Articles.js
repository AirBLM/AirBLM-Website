import React, { useEffect, useState } from "react";
import { apiUrl, paths } from "../../apiConfig";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

import "./Articles.css";

const Articles = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(apiUrl + paths.articles + process.env.REACT_APP_AIRTABLE_API_KEY)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.records);
      })
      .catch(console.error);
  }, []);

  const ArticlesCard = articles.map((el) => (
    <>
      {Object.keys(el.fields).length > 0 ? (
        <Card variant="outlined" className="article-card" key={el.id}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {el.fields.Name}
            </Typography>
            <Typography variant="body2" align="left">
              {el.fields.Description}
            </Typography>
          </CardContent>
          <CardActions className="article-btn">
            <Button
              variant="contained"
              color="primary"
              size="small"
              href={el.fields.Link}
              target="_blank"
            >
              View Resource
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </>
  ));

  return (
    <div className="article">
      <h1>Articles</h1>
      <Grid container direction="row" justify="space-evenly">
        {ArticlesCard}
      </Grid>
    </div>
  );
};

export default Articles;
