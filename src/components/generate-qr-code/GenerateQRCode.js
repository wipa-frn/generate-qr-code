import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';

export default class GenerateQRCode extends Component {
  render() {
    return (
      <DivStyle>
        <Button>My QR Code</Button>
      </DivStyle>
    )
  }
}

const DivStyle = styled.div`
  display:flex;
  justify-content: center;

`