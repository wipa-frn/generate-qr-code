import React, { Component } from 'react';
import QRCode from 'qrcode.react'
import { encryptObject } from '../../utils/method'

export default class QRCodePic extends Component {
  render() {
    return (
      <QRCode
        value={encryptObject(this.props.currentUser)}
        size={220}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={true}
        renderAs={"svg"}
        ref={ref => this.qrcode = ref}
        imageSettings={{ src: require("../../assets/logo.png") }}
      />
    )
  }
}