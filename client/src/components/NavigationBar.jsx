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
  Popover,
  PopoverBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartClicked } from "../actions";

export const NavigationBar = () => {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const cartPopover = useSelector((state) => state.cartPopover);
  const dispatch = useDispatch();
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
        <NavbarText className="mr-2">
          {isLogged ? (
            "Hello User"
          ) : (
            <Link to="/login" className="btn btn-info">
              Log In/Sign Up
            </Link>
          )}
        </NavbarText>
        <NavbarText id="cart">
          <Button>
            {counter === 0 && isLogged ? <Link to="/checkout"></Link> : null}
            Cart <Badge color="primary">{counter}</Badge>
          </Button>
        </NavbarText>
        {counter !== 0 && isLogged ? null : (
          <Popover
            placement="bottom"
            isOpen={cartPopover}
            target="cart"
            toggle={() => dispatch(cartClicked())}
          >
            <PopoverBody>
              {counter === 0 && isLogged
                ? "Your cart seems to be empty, please start shopping!"
                : "Please Log In to add to the cart"}
            </PopoverBody>
          </Popover>
        )}
      </Navbar>
    </div>
  );
};
