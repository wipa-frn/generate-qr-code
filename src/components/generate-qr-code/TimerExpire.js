import React, { Component } from 'react';
import '../../App.css';
import { Nav } from 'react-bootstrap'

export default class TimerExpire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.time,  //second
      minute: 0,
      second: 1
    }
  }

  convertTime = () => {
    this.setState({
      minute: Math.floor(this.state.time / 60),
      second: this.state.time % 60
    })

  }

  // setInterval
  // clearInterval
  componentDidMount() {
    this.convertTime()
    this.doIntervalChange()

  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time - 1
      }))
      this.convertTime()
      if (this.state.time === 0) {
        clearInterval(this.myInterval)
      }
    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {

    const { time, minute, second } = this.state

    return (
      <div>
        Expire After: {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}
      </div>
    )
  }

}