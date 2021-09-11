import React from "react";
import "../css/Header.css";
import { Button, Paper, IconButton, InputBase, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ManPhoto from "../Assets/man-12326.png"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="top_Header" id="home">
      <Container>
      <div className="header_two_part">
        <div className="header_textpart">
          <h3>
            Find the perfect freelance <br /> services for your business
          </h3>

          <Paper component="form" className={classes.root}>
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />

            <Divider className={classes.divider} orientation="vertical" />

            <Button>hello</Button>
          </Paper>
          {/* popular */}
          <div class="popular">
            <ul>
              <li>Popular:</li>
              <li>
                <a
                  href="/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&amp;pos=1&amp;name=web-plus-mobile-design"
                  class="text-body-2"
                >
                  Website Design
                </a>
              </li>
              <li>
                <a
                  href="/categories/programming-tech/wordpress-services?source=hplo_search_tag&amp;pos=2&amp;name=wordpress-services"
                  class="text-body-2"
                >
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href="/categories/graphics-design/creative-logo-design?source=hplo_search_tag&amp;pos=3&amp;name=creative-logo-design"
                  class="text-body-2"
                >
                  Logo Design
                </a>
              </li>
              <li>
                <a
                  href="/stores/dropshipping?source=hplo_search_tag&amp;pos=4&amp;name=dropshipping"
                  class="text-body-2"
                >
                  Dropshipping
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="man_photo_part">
             <img src={ManPhoto} alt="" height="auto" width="500px" />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Header;
