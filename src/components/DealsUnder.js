import React from "react";
import { Container, Grid, Paper ,Card,Button} from "@material-ui/core";
import "../css/DealsUnder.css";
import Demo from '../Assets/headerimg.png'

const DealsUnder = () => {
  return (
    <Container className="dealsUnder ComponentSpace upMargin">
      <div className="title_style">
        <h1>Deals under 30</h1>
      </div>
      <Grid
        className="dealsContainer"
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className="img img1">
            <div className="overlay"></div>
            <a href="/">Food And Drinks</a>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>

          <Card className="img img2">
          <div className="overlay"></div>
            <a href="/">Home & Automotive Services</a>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className="img img3">
            <div className="overlay"></div>
            <a href="/">Beauty & Wellness</a>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className="img img4">
            <div className="overlay"></div>
            <a href="/">Activities & Attractions</a>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DealsUnder;
