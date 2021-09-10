import React from "react";
import "../css/ExploreMarket.css";
import { Container, Grid } from "@material-ui/core";
import Internet from "../Assets/inteernet.png";
const ExploreMarket = () => {
  return (
    <Container className="ComponentSpace">
      <div className="Title_style">
        <h1>Explor the market place</h1>
      </div>
      <Grid container spacing={3} direction="row" justifyContent="space-around">
        <Grid item lg={2}>
          <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="row" justifyContent="space-around">
        <Grid item lg={2}>
          <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
        <Grid item lg={2}>
        <div className="itemList">
            <img src={Internet} alt="" />
            <h3>this is </h3>
          </div>
        </Grid>
      </Grid>
    
    </Container>
  );
};

export default ExploreMarket;
