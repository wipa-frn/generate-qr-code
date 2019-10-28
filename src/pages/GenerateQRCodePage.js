import React, { Component } from 'react';
import '../App.css';
import MainPage from '../pages/MainPage'
import GenerateQRCode from '../components/generate-qr-code/GenerateQRCode'

export default class GenerateQRCodePage extends Component {
  render() {
    const currentUser = this.props.location.state.currentUser
    return (
      <div>
        <MainPage currentUser={currentUser} content={<GenerateQRCode currentUser={currentUser} />} />
      </div>
    )
  }
}
