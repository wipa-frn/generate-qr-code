import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Clock extends Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }
  render() {
    const { time } = this.props;
    return (
      <div>
        Expire after: {this.format(time)}
      </div>
    )
  }
}

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: -1,
      running: false,
      fixTimeExpire: this.props.fixTimeExpire
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }

  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        { count: newCount }
      );
      if (newCount < 0) {
        this.handleStop()
        this.props.setDisableShowQR()
      }

    }, 1000);
  }

  handleCountdown(seconds) {
    setTimeout(() => {
      this.setState({
        count: seconds,
        running: true
      })
    }, 500);

  }

  handleStop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState(
        { running: false }
      );
    }
  }

  render() {
    const { count, fixTimeExpire } = this.state;
    return (
      <div class="d-flex flex-column align-items-center">
        {count >= 0 ? <Clock time={count} /> : null}
        <br></br>
        <Button className="shadow" variant="info" size="sm" onClick={() => { this.handleCountdown(fixTimeExpire); this.props.generateQR() }}><i class="fas fa-redo-alt"></i></Button>
      </div>
    )
  }
}
