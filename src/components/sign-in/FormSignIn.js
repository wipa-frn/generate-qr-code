import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import '../../App.css';
import styled from 'styled-components'
import { getEmployeeData } from '../../utils/data'
import { Redirect } from 'react-router-dom'

export default class FormSignIn extends Component {
  state = {
    redirect: false,
    currentUser: null
  }

  onSubmit(event) {
    event.preventDefault();

    //get value from form.
    const username = this.refs.username.value
    const password = this.refs.password.value

    // match username and password 
    const currentUser = getEmployeeData().filter(user => {
      return user.username === username && user.password === password
    })

    //If user is match ,page redirect to generate-qr-code
    if (currentUser.length > 0) {
      this.setState({
        redirect: true,
        currentUser: currentUser[0]
      })
    }
    else {
      alert("Username or Password is not correct.")
    }

  }

  render() {
    const { redirect, currentUser } = this.state;

    //redirect to generate-qr-code
    if (redirect) {
      return <Redirect to={{
        pathname: "/generate-qr-code",
        state: { currentUser: currentUser }
      }} />;
    }

    return (
      <div>
        <TitleSignIn>Sign In</TitleSignIn>
        <Form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label><i class="fas fa-user"></i> Username</Form.Label>
            <Form.Control ref="username" placeholder="Enter Username" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label><i class="fas fa-lock"></i> Password</Form.Label>
            <Form.Control ref="password" type="password" placeholder="Password" required />
          </Form.Group>
          <DivStyle>
            <Button variant="primary" type="submit" >Sign In</Button>
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