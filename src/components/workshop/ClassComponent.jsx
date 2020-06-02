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
      </div>
    )
  }
}

export default ClassComponent
