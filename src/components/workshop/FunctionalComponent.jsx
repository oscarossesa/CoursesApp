import React from 'react'

const FunctionalComponent = (props) => {
  return (
    <div style={{ border: 'solid 6px blue' }}>
      Soy un ejemplo de <b>{props.name}</b>.
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default FunctionalComponent
