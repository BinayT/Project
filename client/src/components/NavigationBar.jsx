import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavigationBar = () => {
  const counter = useSelector((state) => state.counterReducer);
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
        <NavbarText>
          <Button color="primary" outline>
            Cart <Badge color="secondary">{counter}</Badge>
          </Button>
        </NavbarText>
      </Navbar>
    </div>
  );
};
