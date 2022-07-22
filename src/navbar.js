import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const { Link } = Nav;
const { Toggle, Collapse } = Navbar;
const { Item: NavItem } = NavDropdown;

export default function NavBS(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed={props.fixed}
      bg={props.trans}
      variant="dark"
    >
      <Container>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link as={NavLink} eventKey="1" to="/" exact>
              Home
            </Link>
            <Link as={NavLink} eventKey="2" to="/TodoApp">
              Todo
            </Link>
            <Link as={NavLink} eventKey="3" to="/ColorApp">
              Color Picker
            </Link>
            <Link as={NavLink} eventKey="4" to="/Covid">
              SG Covid Tracker
            </Link>
            <NavDropdown title="JS Frameworks" id="basic-nav-dropdown">
              <NavItem
                target="_blank"
                href="https://comcalc.neocities.org/vue/#/"
              >
                Vue
              </NavItem>
              <NavItem
                target="_blank"
                href="http://aspiring-argument.surge.sh/"
              >
                Gatsby
              </NavItem>
            </NavDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
