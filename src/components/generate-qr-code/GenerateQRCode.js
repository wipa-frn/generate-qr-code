import React, { Component } from 'react';
import '../../App.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import TimerExpire from './TimerExpire'
import QRCodePic from './QRCodePic'
import DateTime from './DateTime'
import QRCodeInfo from './QRCodeInfo'

export default class GenerateQRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQR: false,
      currentUser: {
        id: this.props.currentUser.id,
        name: this.props.currentUser.name,
        location: null,
        created: null,
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
      <div class="row shadow">
        <div class="col-lg-6 bg-warning rounded-left">
          {/* show current Date Time */}
          <DivStyle>
            <DateTime />
            <div class="px-5 py-2 text-center">
              <p><em><i class="fas fa-map-marker-alt text-danger"></i> {currentUser.location ? currentUser.location : "Not found location"}</em></p>
            </div>
          </DivStyle>
          {/* show data use to generate-qr-code*/}
          {showQR ?
            <DivStyle>
              <QRCodeInfo currentUser={currentUser} />
            </DivStyle> : null}

        </div>
        <div class="col-lg-6 bg-white rounded-right">
          {
            (currentUser.location !== null) ? (
              <DivStyle>
                <div class="d-flex flex-column align-items-center">
                  {showQR ?
                    <div>
                      <h4 class="text-primary" align="center"><strong>Your QR Code</strong></h4>
                      <QRCodePic currentUser={currentUser} />
                    </div>
                    :
                    <DivStyle>
                      <div class="d-flex flex-column align-items-center">
                        <div class=" p-2 bg-warning rounded shadow ">Please generate QR Code</div>
                      </div>
                    </DivStyle>
                  }

                  <TimerExpireDiv>
                    <TimerExpire generateQR={this.generateQR} fixTimeExpire={120} setDisableShowQR={this.setDisableShowQR} />
                  </TimerExpireDiv>

                  {showQR ? <TextStyle>You'll clock in when machine scans your QR Code.</TextStyle> : null}
                </div>
              </DivStyle>
            ) : <DivStyle><div class="d-flex flex-column align-items-center"><Button onClick={this.getLocationUpdate}>Please allow access location.</Button></div></DivStyle>
          }
        </div>

      </div>


    )
  }
}

const DivStyle = styled.div`
            margin-top: 10%;
            margin-bottom: 5%;
            display:flex;
            flex-direction: column;
          
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
