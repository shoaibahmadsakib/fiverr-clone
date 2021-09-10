import React from "react";
import { Container, Grid, Paper ,Card,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import "../css/ShopGoods.css";

function ShopGoods() {
  return (
    <Container fixed  className="ComponentSpace">
      <div className="title_style">
        <h1>Shop goods by price</h1>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
      >
        <Grid item lg={3}>
          <Card className="first-img">
            <Button>CLick here for deal</Button>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card className="first-img">
            <Button>CLick here for deal</Button>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card className="first-img">
            <Button>CLick here for deal</Button>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card className="first-img">
            <Button>CLick here for deal</Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
export default ShopGoods;
