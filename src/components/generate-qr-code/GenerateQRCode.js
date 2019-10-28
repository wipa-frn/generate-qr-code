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
      showQR: false,
      currentUser: {
        ...this.props.currentUser,
        location: null,
        created: new Date(),
      }
    }
  }

  generateQR = () => {

    //get new location
    navigator.geolocation.getCurrentPosition(this.getLocation, this.errorHandler)
    this.setState({ showQR: true })
  }

  setDisableShowQR = () => {
    this.setState({ showQR: false })
  }

  getLocation = position => {
    //convert latitude and longitude from 'location iq' api
    fetch("https://us1.locationiq.com/v1/reverse.php?key=852b1e16101a3b&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&format=json")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          currentUser: {
            ...this.state.currentUser,
            created: new Date(),
            location: responseJson.display_name,

          }
        })
      })
  }

  errorHandler = err => {
    if (err.code === 1) {
      alert("Error: Access location is denied!");
    } else if (err.code === 2) {
      alert("Error: Position is unavailable!");
    }
  }

  getLocationUpdate = () => {
    //get location name
    let options = { timeout: 120000 };
    if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(this.getLocation, this.errorHandler)
    }
    else {
      alert('Sorry, browser does not support geolocation!')
    }
  }

  componentWillMount() {
    this.getLocationUpdate()
  }

  render() {
    const { showQR, currentUser } = this.state

    return (
      <ContainerStyle>

        <div>
          {
            (currentUser.location !== null) ? (
              <DivStyle>
                {showQR ?
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
                  : <div class="p-2 bg-warning rounded shadow ">Please generate QR Code</div>
                }

                <TimerExpireDiv>
                  <TimerExpire generateQR={this.generateQR} fixTimeExpire={120} setDisableShowQR={this.setDisableShowQR} />
                </TimerExpireDiv>

                {showQR ? <TextStyle>You'll clock in when machine scans your QR Code.</TextStyle> : null}
              </DivStyle>
            ) : <Button onClick={this.getLocationUpdate}>Please allow access location.</Button>
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
