import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import logo from "assets/img/blumer.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-right">
            <ul>
              <li>
                <img src={logo} alt="logo_image" style={styleLogo}/>
              </li>
            </ul>
          </nav>
        </Grid>
      </footer>
    );
  }
}

const styleLogo = {
  height: 60,
  width: 160
};


export default Footer;
