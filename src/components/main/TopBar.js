import React, { Component } from 'react';
import '../../App.css';
import { Image, Button } from 'react-bootstrap'
import styled from 'styled-components';

export default class Menu extends Component {
  render() {
    return (
      <DivStyle>
        <ImageStyle src={require("../../assets/profile.jpg")} roundedCircle />
        <Button variant="light"><i class="fas fa-sign-out-alt"></i> Logout</Button>
      </DivStyle>
    )
  }
}

const DivStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  
`
const ImageStyle = styled(Image)`
  width:50px;
  height:50px;
  margin-right: 15px;
`