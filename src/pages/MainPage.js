import React, { Component } from 'react';
import '../App.css';
import { Image } from 'react-bootstrap'
import styled from 'styled-components';
import Menu from '../components/main/Menu'
import TopBar from '../components/main/TopBar'

import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

export default class MainPage extends Component {

  render() {
    const items = [
      <SidebarItem><ImageStyle src={require("../assets/angstrom-logo-full.png")}></ImageStyle></SidebarItem>,
      <SidebarItem><Menu /></SidebarItem>,
    ];

    return (
      <Sidebar content={items}>
        <div className="main-page">
          <div className="right-main-page">
            <div className="top-bar-main-page">
              <TopBar currentUser={this.props.currentUser} />
            </div>
            <div className="content-main-page">
              {this.props.content}
            </div>
          </div>
        </div>
      </Sidebar>

    )
  }
}

const ImageStyle = styled(Image)`
  width:110px;
  height:30px;
`

const DivLogoStyle = styled.div`
  padding : 5%;
  display: flex;
  justify-content: center;
`