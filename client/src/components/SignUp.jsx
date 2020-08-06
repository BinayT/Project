import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  width: 30%;
  margin: 0 auto;
`;

export const SignUp = (props) => {
  return (
    <StyledDiv className="mt-5">
      <h1 className="mb-4">SIGN UP</h1>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" id="examplename" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <Button color="primary">Sign Up</Button>
        <Alert color="dark" className="mt-4">
          Go to <Link to="/login">Log In</Link>
        </Alert>
      </Form>
    </StyledDiv>
  );
};
