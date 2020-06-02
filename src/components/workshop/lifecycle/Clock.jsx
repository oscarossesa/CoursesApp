import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div style={{ border: 'solid 6px brown' }}>
        Tengo acceso a los métodos componentDidMount() y componentWillUnmount()
        del ciclo de vida y gracias a ellos puedo mostrar la hora.
        <h5>It is {this.state.date.toLocaleTimeString()}.</h5>
      </div>
    )
  }
}

export default Clock
