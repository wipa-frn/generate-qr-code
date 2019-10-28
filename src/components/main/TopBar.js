import React, { Component } from 'react';
import '../../App.css';
import { Image, Button } from 'react-bootstrap'
import styled from 'styled-components';

export default class TopBar extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <DivStyle>
        <ImageStyle src={currentUser.avatar} roundedCircle />
        <div class="d-flex flex-column justify-content-center mr-2">
          <NameStyle>{currentUser.name}</NameStyle>
          <RoleStyle>{currentUser.role}</RoleStyle>
        </div>
        <Button variant="light"><i class="fas fa-sign-out-alt"></i></Button>
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
  width:45px;
  height:45px;
  margin-right: 15px;
`

const NameStyle = styled.div`
  font-size: 0.9em;
  font-weight: bold;
`
const RoleStyle = styled.div`
  font-size: 0.8em;
`