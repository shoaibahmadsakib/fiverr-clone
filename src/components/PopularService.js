import React from "react";
import "../css/PopularService.css";
import Carousel from "react-elastic-carousel";
import { Container } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const PopularService = () => {
  return (
    <Container className="ComponentSpace">
      <Carousel itemsToScroll={2} breakPoints={breakPoints} outerSpacing={0}>
        <div className="image_1 text_styleImg">
          <p>Logo design</p>
          <h3>brand</h3>
        </div>
        <div className="image_2 text_styleImg">
          <p>thia ia populae</p>
          <h3>Wordpress</h3>
        </div>
        <div className="image_3 text_styleImg">
          <p>thia ia populae</p>
          <h3>Web design</h3>
        </div>
        <div className="image_4 text_styleImg">
          {" "}
          <p>thia ia populae</p>
          <h3>service</h3>
        </div>
        <div className="image_5 text_styleImg">
          {" "}
          <p>thia ia populae</p>
          <h3>service</h3>
        </div>
        <div className="image_6 text_styleImg">
          {" "}
          <p>thia ia populae</p>
          <h3>service</h3>
        </div>
      </Carousel>
    </Container>
  );
};

export default PopularService;
