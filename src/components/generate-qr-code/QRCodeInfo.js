import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faUser, faMapMarkerAlt, faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons'

export default class QRCodeInfo extends Component {

  render() {
    const { currentUser } = this.props

    var dateFormat = require('dateformat');
    const date = dateFormat(currentUser.created, "dddd, mmmm dS, yyyy");
    const time = dateFormat(currentUser.created, "hh:MM:ss TT")

    return (
      <div class="shadow rounded bg-light p-2">
        <h6 align="center" class="p-2"><strong>QR Code information</strong></h6>
        <div><FontAwesomeIcon icon={faIdCard} className="text-success" /> {currentUser.id}</div>
        <div><FontAwesomeIcon icon={faUser} className="text-secondary" /> {currentUser.name}</div>
        <div><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> {currentUser.location}</div>
        <div><FontAwesomeIcon icon={faCalendarDay} className="text-primary" /> {date}</div>
        <div><FontAwesomeIcon icon={faClock} className="text-info" /> {time}</div>
      </div>
    )
  }
}