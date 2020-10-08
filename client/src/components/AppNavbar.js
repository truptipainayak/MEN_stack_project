import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class AppNavbar extends Component {
    render(){
        return (
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Sticky Notes</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
            </NavItem>
          </Nav>
          <NavLink href="https://github.com/truptipainayak/TodoList.git">GitHub</NavLink>
      </Navbar>
    </div>
    );
    }
}

export default AppNavbar;