import React from "react";
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/" className="nav-link">
            reactstrap
          </Link>
        </NavbarBrand>
        <NavbarToggler />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/github" className="nav-link">
              GitHub
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
