import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
  const [count, setCount] = useState(0)

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`
  })

  return (
    <div style={{ border: 'solid 6px green' }}>
      <p>Tu has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Clickeame</button>
    </div>
  )
}

export default UseEffectHook
