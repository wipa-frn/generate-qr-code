import React, { Component } from 'react';
import '../App.css';
import MainPage from '../pages/MainPage'
import GenerateQRCode from '../components/generate-qr-code/GenerateQRCode'

export default class GenerateQRCodePage extends Component {
  render() {
    return (
      <div>
        <MainPage content={<GenerateQRCode />} />
      </div>
    )
  }
}
