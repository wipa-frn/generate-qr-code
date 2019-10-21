import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import QRCode from 'qrcode.react'

export default class GenerateQRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQR: false
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
              <DivStyle>
                <QRCode
                  value={"http://picturesofpeoplescanningqrcodes.tumblr.com/"}
                  size={200}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={false}
                  renderAs={"svg"}
                  ref={ref => this.qrcode = ref}
                  img={{ "src": require("../../assets/logo.png"), "top": 50, "left": 50, "width": 15, "height": 15 }}
                />
              </DivStyle>
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
  padding: 5% 10% 5% 10%;
  align-items: center;
`
const DivStyle = styled.div`
  background-color: white;
  width: 250px;
  height: 250px;
  margin-top: 10%;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top : 10%
`