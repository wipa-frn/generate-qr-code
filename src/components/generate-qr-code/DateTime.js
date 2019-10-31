import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class DateTime extends Component {
  render() {
    return (
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>
          <FontAwesomeIcon icon={faClock} /> <Clock
            format={'hh : mm : ss A'}
            ticking={true}
            timezone={'Asia/Bangkok'} />
        </h1>
        <h6>
          <Clock
            format={'dddd, MMMM Do, YYYY'}
            ticking={true}
            timezone={'Asia/Bangkok'} />
        </h6>

      </div >

    )

  }
}