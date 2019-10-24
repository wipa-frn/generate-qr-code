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
      watchID: null
    }
  }

  generateQR = () => {
    this.setState({
      // showQR: !this.state.showQR,
      created: new Date(),

    })
    //get new location
    navigator.geolocation.watchPosition(this.getLocation, this.errorHandler)
  }


  getLocation = position => {
    //convert latitude and longitude from 'location iq' api
    fetch("https://us1.locationiq.com/v1/reverse.php?key=852b1e16101a3b&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&format=json")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          currentUser: {
            location: responseJson.display_name
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
    let watchID = null;
    // let options = { timeout: 10000 };
    if (navigator.geolocation) { //check if geolocation is available
      watchID = navigator.geolocation.watchPosition(this.getLocation, this.errorHandler)

      this.setState({
        watchID: watchID
      })
    }
    else {
      alert('Sorry, browser does not support geolocation!')
    }
  }

  componentWillMount() {
    this.getLocationUpdate()

  }

  componentWillUnmount() {
    // navigator.geolocation.clearWatch(this.state.watchID);

  }
  render() {
    const { showQR, currentUser, nowTimeExpire, fixTimeExpire } = this.state

    return (
      <ContainerStyle>

        <div>
          {
            (currentUser.location !== null) ? (
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

const DivButtonRedo = styled.div`

  
`