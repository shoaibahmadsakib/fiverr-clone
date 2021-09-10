import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "../css/SmallCard.css";

const SmallCard = () => {
  return (
    <Container className="ComponentSpace">
      <div className="paper_size">
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
        <Paper className="paper_style">
          <AccessTimeIcon />
          <h3>this is a valiue</h3>
        </Paper>
      </div>
    </Container>
  );
};

export default SmallCard;
