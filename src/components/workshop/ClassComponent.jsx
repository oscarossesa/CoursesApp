// import React, { Component } from 'react'

// export default class ClassComponentExample extends Component {
//   render() {
//     return (
//       <div>
//         Soy un ejemplo de <b>componente de clase</b>.
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        border: 'solid 6px green',
      },
    }
  }

  render() {
    return (
      <div style={this.state.style}>
        <b>{this.props.name}</b> (ClassComponent.jsx)
        <ul>
          <li>
            No me deberían ocupar a menos que el componente ya este hecho como
            clase y no pueda migrarlo.
          </li>
          <li>
            Cada cambio tanto en props como en estado llaman al método render.
          </li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default ClassComponent
