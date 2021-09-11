import React,{useEffect, useState} from "react";
import "../css/ExploreMarket.css";
import { Container, Grid } from "@material-ui/core";
import Graphic from "../Assets/svgs/graphics-design.svg";
import Business from "../Assets/svgs/business.svg";
import Writing from "../Assets/svgs/writing-translation.svg";
import Video from "../Assets/svgs/video-animation.svg";
import Music from "../Assets/svgs/music-audio.svg";
import Programming from "../Assets/svgs/programming.svg";
import Lifestyle from "../Assets/svgs/lifestyle.svg";


const ExploreMarket = () => {
  const [color, setColor] = useState('black');

  // useEffect(()=>{

  // },[])

  return (
    <Container className="exploreMarket ComponentSpace">
      <div className="Title_style">
        <h1>Explor the market place</h1>
      </div>
      <Grid container spacing={3} direction="row" justifyContent="flex-start">
        <Grid item xs={12} sm={6} md={2}>
          <div className="itemList">
              <img src={Graphic} alt="" />
              <span></span>
              <h3>Graphics & Design</h3>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Business} alt="" />
            <span></span>
            <h3>Digital Marketing</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Writing} alt="" />
            <span></span>
            <h3>Writing & Translation</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Video} alt="" />
            <span></span>
            <h3>Video & Animation</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Music} alt="" />
            <span></span>
            <h3>Music & Audio</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <div className="itemList">
            <img src={Programming} alt="" />
            <span></span>
            <h3>Programming & Tech</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Lifestyle} alt="" />
            <span></span>
            <h3>Business</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Lifestyle} alt="" />
            <span></span>
            <h3>Business</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Lifestyle} alt="" />
            <span></span>
            <h3>Business</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Lifestyle} alt="" />
            <span></span>
            <h3>Business</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
        <div className="itemList">
            <img src={Lifestyle} alt="" />
            <span></span>
            <h3>Business</h3>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreMarket;
