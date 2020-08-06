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

export const LogIn = (props) => {
  return (
    <StyledDiv className="mt-5">
      <h1 className="mb-4">LOG IN</h1>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <Button color="primary">Log In</Button>
        <Alert color="dark" className="mt-4">
          Not yet registered ? Click <Link to="/signup">here</Link>
        </Alert>
      </Form>
    </StyledDiv>
  );
};
