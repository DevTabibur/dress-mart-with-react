import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,  Container, Nav, NavbarBrand, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMessage, faCartShopping, faSearch, faHeart, faPerson } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>

          <NavbarBrand href="#home">
            <h1>DevTabibur</h1>
          </NavbarBrand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mx-auto">

              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#link">Link</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>

          </Navbar.Collapse>

          <NavbarBrand>
          <Nav.Link href="#home">Home</Nav.Link>
          </NavbarBrand>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
