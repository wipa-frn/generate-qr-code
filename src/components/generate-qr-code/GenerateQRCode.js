import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import QRCode from 'qrcode.react'

export default class GenerateQRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQR: true
    }
  }

  generateQR = () => {
    this.setState({
      showQR: !this.state.showQR
    })
  }

  render() {
    const { showQR } = this.state
    return (
      <ContainerStyle>

        <Button onClick={this.generateQR}>My QR Code</Button>
        <div>
          {
            showQR ? (
              <div>
                <DivStyle>
                  <QRCode
                    value={"http://picturesofpeoplescanningqrcodes.tumblr.com/"}
                    size={220}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={false}
                    renderAs={"svg"}
                    ref={ref => this.qrcode = ref}
                    img={{ "src": require("../../assets/logo.png"), "top": 50, "left": 50, "width": 15, "height": 15 }}
                  />
                </DivStyle>
                <TextStyle>You'll clock in when machine scans your QR Code.</TextStyle>
              </div>
            ) : null

          }
        </div>
      </ContainerStyle>
    )
  }
}

const ContainerStyle = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 10% 5% 10%;
                    `
const DivStyle = styled.div`
  background-color: white;
  // width: 110%;
  // height: 110%;
  margin-top: 10%;
  display:flex;
  flex-direction: column;
  align-items: center;
  // align-self: center
  padding-top : 15%;
  padding-bottom : 15%;

`

const TextStyle = styled.p`
  margin-top : 5%;
  font-size: 1em;
  
`