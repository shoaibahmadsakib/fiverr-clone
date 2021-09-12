import React from "react";
import "../css/PhotoShow.css";
import { Avatar, Grid, Button,Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import home from "../Assets/kitchen.png"
import Foot from "../Assets/footware.png"
import Food from "../Assets/food3.png"
import Elletronic from "../Assets/eletronic.png"
import Food2 from "../Assets/food2.png"


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
          <Button className="button_style_down"> Home & kitchen </Button>
        </Card>

        <Card className={classes.root} id="item-1">
          <Button className="button_style_down">Electronic</Button>
        </Card>

        <Card className={classes.root} id="item-2">
          <Button className="button_style_down">footwear</Button>
        </Card>

        <Card className={classes.root} id="item-3">
          <Button className="button_style_down">apparels & Garment</Button>
        </Card>

        <Card className={classes.root} id="item-4">
          <Button className="button_style_down">Food & FMCG</Button>
        </Card>
      </div>
    </Container>
  );
};

export default PhotoShow;
