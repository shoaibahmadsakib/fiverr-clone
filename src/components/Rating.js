import React from "react";
import "../css/Rating.css";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { Container, Grid } from "@material-ui/core";
import image from "../Assets/popular1.jpg"

const Rating = () => {
  return (
    <Container className="ComponentSpace">
      <Grid container justifyContent="space-between">
        <Carousel itemsToScroll={2} itemsToShow={3}>
          <Item>
            <img src={image} alt="" height="300px" />
          </Item>

          <Item>2</Item>

          <Item>3</Item>

          <Item>4</Item>

          <Item>5</Item>

          <Item>6</Item>
        </Carousel>
      </Grid>
    </Container>
  );
};

export default Rating;
