import React, { Component } from 'react';

export default class QRCodeInfo extends Component {

  render() {
    const { currentUser } = this.props

    var dateFormat = require('dateformat');
    const date = dateFormat(currentUser.created, "dddd, mmmm dS, yyyy");
    const time = dateFormat(currentUser.created, "hh:MM:ss TT")

    return (
      <div class="shadow rounded bg-light p-2">
        <h6 align="center" class="p-2"><strong>QR Code information</strong></h6>
        <div><i class="fas fa-id-card text-success"></i> {currentUser.id}</div>
        <div><i class="fas fa-user text-secondary"></i> {currentUser.name}</div>
        <div><i class="fas fa-map-marker-alt text-danger"></i> {currentUser.location}</div>
        <div><i class="fas fa-calendar-day text-primary"></i> {date}</div>
        <div><i class="fas fa-clock text-info"></i> {time}</div>
      </div>
    )
  }
}