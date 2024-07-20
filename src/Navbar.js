import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
//import fastfood from './assets/fastfood.png'; // Adjust the path as necessary
import logonew from './assets/logo_new.png'; // Adjust the path as necessary

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logonew}
          alt="Restaurant Logo"
          width="200"
          height="70"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navy">
          <Nav.Link className="nav-link-spacing" href="#header">Home</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#about">About</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#services">Services</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#products">Products</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#footer">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
