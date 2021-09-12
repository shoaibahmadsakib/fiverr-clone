import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "../css/SmallCard.css";
import icon1 from '../Assets/svgs/calendar-week-solid.svg'
import icon2 from '../Assets/svgs/cookie-bite-solid.svg'
import icon3 from '../Assets/svgs/home-solid.svg'
import icon4 from '../Assets/svgs/graphics-design.svg'
import icon5 from '../Assets/svgs/writing-translation.svg'
import icon6 from '../Assets/svgs/pizza-slice-solid.svg'
import icon7 from '../Assets/svgs/user-cog-solid.svg'
const SmallCard = () => {
  return (
    <Container className="smallCard ComponentSpace">
      <div className="paper_size">
        <Paper className="paper_style">
          <img src={icon7} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
        <img src={icon6} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
        <img src={icon5} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
        <img src={icon1} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
        <img src={icon4} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
        <img src={icon3} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
        <img src={icon2} alt="" height="50px" width="auto" />
          <h3>this is a valiue</h3>
        </Paper>
      </div>
    </Container>
  );
};

export default SmallCard;
