import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faHeart,
  faPerson,
  faEnvelope,
  faPhone,
  faLocation,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

import './Header.css'

const Header = () => {
  return (
    <>
    <div className="header-top">
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-4">
          <div className="text-start">
            <p className=""><FontAwesomeIcon className="header-top-icon" icon={faPhone}></FontAwesomeIcon>+8801307-588223</p>

            <p className=""><FontAwesomeIcon className="header-top-icon" icon={faEnvelope}></FontAwesomeIcon>developertabiburrahman@gmail.com</p>

          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="text-center">
            <p>Summer sale discount off <span className="header-top-percentage"> 50% </span> !<a href="#" className="shop-now-btn"> Shop Now</a></p>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="text-end">
          <p className=""><FontAwesomeIcon className="header-top-icon" icon={faLocation}></FontAwesomeIcon>New York</p>
          <p className=""><FontAwesomeIcon className="header-top-icon" icon={faFlagUsa}></FontAwesomeIcon>USA</p>
          </div>
        </div>

      </div>
    </div>
    </div>

    {/* ডিজাইন বাকি আছে  */}
    
      <Navbar bg="white" expand="lg" className="container-fluid">
        <Container>
          <NavbarBrand href="#home">
            <h3>DevTabibur</h3>
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
            
              <FontAwesomeIcon className="navbar-icons" icon={faSearch} />
              <FontAwesomeIcon className="navbar-icons" icon={faPerson} />
              <FontAwesomeIcon className="navbar-icons" icon={faHeart} />
              <FontAwesomeIcon className="navbar-icons" icon={faCartShopping} />
            
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
