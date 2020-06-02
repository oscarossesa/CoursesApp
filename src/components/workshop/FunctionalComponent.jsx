import React from 'react'

const FunctionalComponent = (props) => {
  return (
    <div style={{ border: 'solid 6px blue' }}>
      <b>{props.name}</b> (FunctionalComponent.jsx)
    </div>
  )
}

export default FunctionalComponent
