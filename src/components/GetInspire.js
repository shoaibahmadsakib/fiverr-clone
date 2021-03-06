import React from "react";
import "../css/GetInspire.css";
import { Avatar, Grid, Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../Assets/popular1.jpg";
import Food1 from "../Assets/food1.png";

import food2 from "../Assets/food2.png";

import food3 from "../Assets/food3.png";

const useStyles = makeStyles({
  root: {
    Width: "300",
  },
});

const GetInspire = () => {
  const classes = useStyles();
  return (
    <Container className="ComponentSpace">
      <div className="title_style">
        <h1>Get inspair project by client</h1>
      </div>
      <Grid container justifyContent="space-between" spacing={4}>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="250"
                image={Food1}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Button>
              <div className="two_name">
                <b>Sakib</b>
                <p>by me</p>
              </div>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={4} sm={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="250"
                image={food2}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Button>
              <div className="two_name">
                <b>Sakib</b>
                <p>by me</p>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="250"
                image={food3}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Button>
              <div className="two_name">
                <b>Sakib</b>
                <p>by me</p>
              </div>
           
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GetInspire;
