import React from "react";
import { Container, Grid, Paper ,Card,Button} from "@material-ui/core";



import "../css/ShopGoods.css";

function ShopGoods() {
  return (
    <Container className="dealsUnder ComponentSpace upMargin">
    <div className="title_style">
      <h1>Shop goods by price</h1>
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
          <a href="/">10$ and under</a>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>

        <Card className="img img2">
        <div className="overlay"></div>
          <a href="/">10$ and under</a>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="img img3">
          <div className="overlay"></div>
          <a href="/">30$ and under</a>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="img img4">
          <div className="overlay"></div>
          <a href="/">40$ and under</a>
        </Card>
      </Grid>
    </Grid>
  </Container>
  );
}
export default ShopGoods;
