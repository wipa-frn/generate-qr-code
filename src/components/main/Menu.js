import React, { Component } from 'react';
import '../../App.css';
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/generate-qr-code" className="flex-column">
          {/* <Nav.Link className="item" href="/home">Home</Nav.Link> */}
          <Nav.Link className="item" eventKey="generate-qr-code" href="/generate-qr-code"><FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon> Generate QR Code</Nav.Link>
        </Nav>
      </div>
    )
  }
}