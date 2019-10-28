import React, { Component } from 'react';

export default class QRCodeInfo extends Component {

  render() {
    const { currentUser } = this.props

    var dateFormat = require('dateformat');
    const date = dateFormat(currentUser.created, "dddd, mmmm dS, yyyy");
    const time = dateFormat(currentUser.created, "hh:MM:ss TT")

    return (
      <div class="shadow rounded bg-light p-2">
        <div><i class="fas fa-id-card"></i> {currentUser.id}</div>
        <div><i class="fas fa-user"></i> {currentUser.name}</div>
        <div><i class="fas fa-map-marker-alt"></i> {currentUser.location}</div>
        <div><i class="fas fa-calendar-day"></i> {date}</div>
        <div><i class="fas fa-clock"></i> {time}</div>
      </div>
    )
  }
}