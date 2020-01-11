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
      <div className="logo"><ImageStyle src={require("../assets/angstrom-logo-height-50.png")}></ImageStyle></div >,
      <Menu />
    ];

    return (
      <Sidebar content={items} background={"#005580"} width={250}>
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
  padding : 2%;
`

const DivLogoStyle = styled.div`
  // padding : 2%;
`