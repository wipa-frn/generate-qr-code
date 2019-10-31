import React, { Component } from 'react';
import '../../App.css';
import { Image, Button } from 'react-bootstrap'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import { Detector } from "react-detect-offline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

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
        {/* show status online */}
        <Detector
          render={({ online }) => (
            <div class={online ? "text-success mr-2 mb-4" : "text-secondary mr-2 mb-4"}>
              <FontAwesomeIcon icon={faCircle} size="xs" />
            </div>
          )}
        />
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