import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import '../../App.css';
import styled from 'styled-components';

export default class FormSignIn extends Component {
  render() {
    return (
      <div className="container-logo-detail">
        <TitleSignIn>Sign In</TitleSignIn>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><i class="fas fa-user"></i> Username</Form.Label>
            <Form.Control placeholder="Enter Username" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label><i class="fas fa-lock"></i> Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <DivStyle>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </DivStyle>

        </Form>
      </div>
    )
  }
}

const DivStyle = styled.div`
  display: flex;
  flex-direction: column; 
`;

const TitleSignIn = styled.h2`
  margin-bottom: 15px;
  color: #474747;
  font-weight: bold;
  font-size: 1.9em;
`;