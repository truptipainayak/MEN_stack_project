import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';



class AppNavbar extends Component {

    // state = {
    //     isOpen = false
    // }

    // toggle = () => {
    //      this.setState({
    //         isOpen : !this.state.isOpen
    //      }) 
    // }

    render(){
        return (
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Sticky Blog Posts</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Join the club</NavbarText>
      </Navbar>
    </div>
    );
    }
}

export default AppNavbar;