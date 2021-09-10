import React from "react";
import "../css/DealsUnder.css";
import { Container, Grid, Paper ,Card,Button} from "@material-ui/core";


const DealsUnder = () => {
  return (
    <Container className="ComponentSpace upMargin">
      <div className="title_style">
        <h1>Deals under 30</h1>
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
};

export default DealsUnder;
