import React, { Component } from 'react';
import '../App.css';
import LogoDetail from '../components/sign-in/LogoDetail'
import FormSignIn from '../components/sign-in/FormSignIn'
import { Row, Col } from 'react-bootstrap'

export default class SignInPage extends Component {
  render() {
    return (
      <div className="sign-in-page">
        <Row className="sign-in-canvas">
          <Col lg={6} className="left-sign-in-canvas">
            <LogoDetail />
          </Col>
          <Col lg={6} className="right-sign-in-canvas">
            <FormSignIn />
          </Col>
        </Row>
      </div>
    )
  }
}
