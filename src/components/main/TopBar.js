import React, { Component } from 'react';
import '../../App.css';
import { Image, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";

export default class TopBar extends Component {
  state = {
    redirect: false,
  }

  onClickSignOut = () => { }
  render() {
    const { currentUser } = this.props
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to={{
        pathname: "/",
        state: { currentUser: null }
      }} />;
    }

    return (
      <DivStyle>
        <Online><i class="fas fa-circle text-success fa-xs mr-2 mb-4"></i></Online>
        <Offline><i class="fas fa-circle text-secondary fa-xs mr-2 mb-4"></i></Offline>
        <ImageStyle src={currentUser.avatar} roundedCircle />
        <div class="d-flex flex-column justify-content-center mr-2">
          <NameStyle>{currentUser.name}</NameStyle>
          <RoleStyle>{currentUser.role}</RoleStyle>
        </div>
        <Button variant="light" onClick={() => this.setState({ redirect: true })}><i class="fas fa-sign-out-alt"></i></Button>
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