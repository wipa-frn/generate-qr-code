import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import '../../App.css';

export default class LogoDetail extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome to</h2>
        <Image className="logo" src={require('../../assets/angstrom-logo-full.png')} />
        <p>Angstrom is "THE SOLUTIONS" for brokerage firm business.</p>
      </div>
    )
  }
}