import React from 'react'

class ClassUseEffect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
  }

  render() {
    return (
      <div style={{ border: 'solid 6px orange' }}>
        <p>Tu has hecho click {this.state.count} veces</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clickeame
        </button>
      </div>
    )
  }
}

export default ClassUseEffect
