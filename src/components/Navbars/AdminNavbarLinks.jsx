import React, { Component } from "react";
import { NavItem, Nav} from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <span style={navbarColor}>Blumer</span>
             {/*<img src={logo} alt="logo_image" style={styleLogo}/>*/}
          </NavItem>
        </Nav>
      </div>
    );
  }
}

const navbarColor = {
 color: 'white',
};
export default AdminNavbarLinks;
