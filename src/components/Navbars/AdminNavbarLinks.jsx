import React, { Component } from "react";
import { NavItem, Nav} from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Blumer</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Blumer
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
