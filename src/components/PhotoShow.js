import React from "react";
import "../css/PhotoShow.css";
import { Avatar, Grid, Button,Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {},
  Button: {
    color: "white",
  },
});

const PhotoShow = () => {
  const classes = useStyles();
  return (
    <Container  className="ComponentSpace">
      <div className="title_style">
        <h1>Work Showkage</h1>
      </div>
      <div class="angry-grid">
        <Card className={classes.root} id="item-0">
          <Button className={classes.Button}>CLick here for deal</Button>
        </Card>

        <Card className={classes.root} id="item-1">
          <Button className={classes.Button}>CLick here for deal</Button>
        </Card>

        <Card className={classes.root} id="item-2">
          <Button className={classes.Button}>CLick here for deal</Button>
        </Card>

        <Card className={classes.root} id="item-3">
          <Button className={classes.Button}>CLick here for deal</Button>
        </Card>

        <Card className={classes.root} id="item-4">
          <Button className={classes.Button}>CLick here for deal</Button>
        </Card>
      </div>
    </Container>
  );
};

export default PhotoShow;
