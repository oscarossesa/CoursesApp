import React, { useState } from 'react'

const UseStateHook = () => {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: 'solid 6px green' }}>
      <b>Componente funcional</b> (UseStateHook.jsx)
      <p>Tu has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Clickeame</button>
    </div>
  )
}

export default UseStateHook
