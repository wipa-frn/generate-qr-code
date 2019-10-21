import React, { Component } from 'react';
import '../App.css';
import LogoDetail from '../components/sign-in/LogoDetail'
import FormSignIn from '../components/sign-in/FormSignIn'

export default class SignInPage extends Component {
  render() {
    return (
      <div className="sign-in-page">
        <div></div>
        <div className="center-sign-in-page">
          <div className="sign-in-canvas">
            <div className="left-sign-in-canvas">
              <LogoDetail />
            </div>
            <div className="right-sign-in-canvas">
              <FormSignIn />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
