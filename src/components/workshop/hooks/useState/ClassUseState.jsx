import React from 'react'

class ClassUseState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div style={{ border: 'solid 6px orange' }}>
        <b>Componente de clase</b> (ClassComponent.jsx)
        <p>Tu has clickeado {this.state.count} veces</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clickeame
        </button>
      </div>
    )
  }
}

export default ClassUseState
