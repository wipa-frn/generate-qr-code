import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import QRCode from 'qrcode.react'
import { encryptObject } from '../../utils/method'
import TimerExpire from './TimerExpire'

export default class GenerateQRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQR: true,
      currentUser: {
        id: 1234,
        name: 'Wipawadee Monkut',
        location: 'Angstrom',
        created: new Date(),
      },
      nowTimeExpire: 10,
      fixTimeExpire: 10,
    }
  }

  generateQR = () => {
    this.setState({
      showQR: !this.state.showQR,
      created: new Date(),

    })
  }

  render() {
    const { showQR, currentUser, nowTimeExpire, fixTimeExpire } = this.state

    return (
      <ContainerStyle>
        <Button onClick={this.generateQR}>Generate My QR Code</Button>
        <div>
          {
            showQR ? (
              <DivStyle>
                <QRCode
                  value={encryptObject(currentUser)}
                  size={220}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={true}
                  renderAs={"svg"}
                  ref={ref => this.qrcode = ref}
                  img={{ "src": require("../../assets/logo.png"), "top": 50, "left": 50, "width": 15, "height": 15 }}
                />

                <TimerExpireDiv>
                  <TimerExpire time={fixTimeExpire} />
                </TimerExpireDiv>
                <DivButtonRedo>
                  <Button variant="info" onCLick={this.generateQR}><i class="fas fa-redo-alt"></i></Button>
                </DivButtonRedo>




                <TextStyle>You'll clock in when machine scans your QR Code.</TextStyle>
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
  align-items: center;
  justify-content: center;
  padding: 5% 10% 5% 10%;
                    `
const DivStyle = styled.div`
  margin-top: 10%;
  display:flex;
  flex-direction: column;
  align-items: center;

`

const TextStyle = styled.p`
  margin-top : 5%;
  font-size: 1em;
  
`

const TimerExpireDiv = styled.div`
  font-size: 0.9em;
  margin: 5%;
  color: #454545;
`

const DivButtonRedo = styled.div`

  
`