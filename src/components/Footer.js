import React from "react";
import "../css/Footer.css";
import { Container, Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        // alignItems="center"
      >
        <Grid lg={1} md={4} sm={6} xs={12}>
          <ul className="Footer_listitem">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </Grid>
        <Grid lg={1} md={4} sm={6} xs={12}>
          <ul className="Footer_listitem">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </Grid>
        <Grid lg={1} md={4} sm={6} xs={12}>
          <ul className="Footer_listitem">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </Grid>
        <Grid lg={1} md={4} sm={6} xs={12}>
          <ul className="Footer_listitem">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </Grid>
        <Grid lg={1} md={4} sm={6} xs={12}>
          <ul className="Footer_listitem">
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </Grid>
      </Grid>
      <div className="footer_twoItem">
        <Grid container>
          <Grid item lg={6}>
            Logo
          </Grid>
          <Grid item lg={6}>
            Link
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Footer;
