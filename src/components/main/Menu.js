import React, { Component } from 'react';
import '../../App.css';
import { Nav } from 'react-bootstrap'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/generate-qr-code" className="flex-column">
          <Nav.Link className="item" href="/home">Home</Nav.Link>
          <Nav.Link className="item" eventKey="generate-qr-code" href="/generate-qr-code">Generate QR Code</Nav.Link>
        </Nav>
      </div>
    )
  }
}