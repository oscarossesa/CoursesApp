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
    console.log(this.state)
  }

  render() {
    return (
      <div style={this.state.style}>
        Soy un ejemplo de <b>{this.props.name}</b>.
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
