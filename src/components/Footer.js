import React from "react";
import "../css/Footer.css";
import { Container, Grid } from "@material-ui/core";

const ListCatagories = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Data",
  "Business",
];
const About = [
  "Careers",
  "Press & News",
  "Partnerships",
  "Privacy Policy",
  "Terms of Service",
  "Investor Relations",
];

const Support = [
  "Careers",
  "Press & News",
  "Partnerships",
  "Privacy Policy",
  "Terms of Service",
  "Investor Relations",
];

const Community = [
  "CarEventseers",
  "Blog",
  "FOrm",
  "Community",
  "Podcat",
  "Investor Relations",
];
const MoreBusiness = [
  "Fiverr Business",
  "NewFiverr Pros",
  "Fiverr Studios",
  "Privacy Policy",
  "Fiverr Logo Maker",
  "Investor Relations",
];

const Footer = () => {
  return (
    <div className="Footer_container">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          // alignItems="center"
        >
          <Grid lg={1} md={4} sm={6} xs={12}>
            <ul className="Footer_listitem">
              <div className="list_header">
                <b>Catagories</b>
              </div>
              <div className="list_style">
                {ListCatagories.map((list1) => (
                  <li>{list1}</li>
                ))}
              </div>
            </ul>
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12}>
            <ul className="Footer_listitem">
              <div className="list_header">
                <b>About</b>
              </div>
              <div className="list_style">
                {About.map((list2) => (
                  <li>{list2}</li>
                ))}
              </div>
            </ul>
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12}>
            <ul className="Footer_listitem">
              <div className="list_header">
                {" "}
                <b>Supports</b>
              </div>
              <div className="list_style">
                {" "}
                {Support.map((list1) => (
                  <li>{list1}</li>
                ))}
              </div>
            </ul>
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12}>
            <ul className="Footer_listitem">
              <div className="list_header">
                <b>Communites</b>
              </div>
              <div className="list_style">
                {" "}
                {Community.map((list1) => (
                  <li>{list1}</li>
                ))}
              </div>
            </ul>
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12}>
            <ul className="Footer_listitem">
              <div className="list_header">
                <b>More about brand</b>
              </div>
              <div className="list_style">
                {" "}
                {MoreBusiness.map((list1) => (
                  <li>{list1}</li>
                ))}
              </div>
            </ul>
          </Grid>
        </Grid>
        <div className="footer_twoItem">
          <Grid container>
            <Grid item lg={6} sm={6}>
             <h3>Company logo</h3>
            </Grid>
            <Grid item lg={6} sm={6}>
             <p>Copy right by someone </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
