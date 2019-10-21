import React, { Component } from 'react';
import '../App.css';
import { Image } from 'react-bootstrap'
import styled from 'styled-components';
import Menu from '../components/main/Menu'

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="left-main-page">
          <DivLogoStyle>
            <ImageStyle src={require("../assets/angstrom-logo-full.png")}></ImageStyle>
          </DivLogoStyle>
          <div>
            <Menu />
          </div>
        </div>
        <div className="right-main-page">
          <div className="top-bar-main-page"></div>
          <div className="content-main-page">

          </div>
        </div>
      </div>
    )
  }
}

const ImageStyle = styled(Image)`
  width:70%;
  height:70%;
`

const DivLogoStyle = styled.div`
  padding : 5%;
  display: flex;
  justify-content: center;
`