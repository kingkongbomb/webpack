import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink} from "react-router-dom";

export default function NavBS(props) {
  return (
    <Navbar collapseOnSelect expand="md" fixed={props.fixed} bg={props.trans} variant="dark" onToggle={toggle=> toggle? console.log("OPEN") :console.log("CLOSE")}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} eventKey="1" to="/" exact>
              Home 
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="2" to="/TodoApp" >
              Todo
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="3" to="/ColorApp">
              Color Picker
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="4" to="/Covid">
              SG Covid Tracker
            </Nav.Link>
            <NavDropdown title="JS Frameworks" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://comcalc.neocities.org/vue/#/"
              >
                Vue
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="http://aspiring-argument.surge.sh/"
              >
                Gatsby
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

