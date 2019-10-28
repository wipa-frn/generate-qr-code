import React, { Component } from 'react';
import Clock from 'react-live-clock';

export default class DateTime extends Component {
  render() {
    return (
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>
          <i class="fas fa-clock"></i> <Clock
            format={'hh : mm : ss A'}
            ticking={true}
            timezone={'Asia/Bangkok'} />
        </h1>
        <h6>
          <Clock
            format={'dddd, MMMM Mo, YYYY'}
            ticking={true}
            timezone={'Asia/Bangkok'} />
        </h6>

      </div >

    )

  }
}