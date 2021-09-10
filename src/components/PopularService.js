import React from "react";
import "../css/PopularService.css";
import Carousel from "react-elastic-carousel";
import { Container } from "@material-ui/core";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4}
];
const PopularService = () => {
  return (
    <Container className="ComponentSpace">
      <Carousel itemsToScroll={2}  breakPoints={breakPoints}
 outerSpacing={0}
      >
        <div className="image_1">
          <h3>service</h3>
          <p>thia ia populae</p>
        </div>
        <div className="image_1">
   
          <h3>service</h3>
          <p>thia ia populae</p>
        </div>
        <div className="image_1">
     
          <h3>service</h3>
          <p>thia ia populae</p>
        </div>
        <div className="image_1">
          {" "}
          <h3>service</h3>
          <p>thia ia populae</p>
        </div>
        <div className="image_1">
          {" "}
          <h3>service</h3>
          <p>thia ia populae</p>
        </div>
        <div className="image_1">
          {" "}
          <h3>service</h3>
          <p>thia ia populae</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default PopularService;
