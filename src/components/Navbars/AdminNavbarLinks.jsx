import React, { Component } from "react";
import { NavItem, Nav} from "react-bootstrap";
import logo from '../../assets/img/blumer.png'
class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i style={navbarColor.colorIcon} className="fa fa-dashboard" />
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
             <img src={logo} alt="logo_image" style={navbarColor.styleLogo}/>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

const navbarColor = {
 colorIcon: {
  color: '#7e5ae1'
 },
 styleLogo: {
  height: 20,
  width: 60
 }
};
export default AdminNavbarLinks;
