import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

const Workshop = () => {
  return (
    <div style={{ border: 'solid 6px red' }}>
      Soy el Contenedor ROJO del workshop y como contenedor tengo:
      <ul>
        <li>La lógica de negocio.</li>
        <li>El Manejo el ciclo de vida de la aplicación.</li>
        <li>El consumo a APIs.</li>
        <li>
          La función de alimentar a los componentes con su respectiva
          información.
        </li>
      </ul>
      <div className="d-flex justify-content-around">
        <ClassComponent name="componente de clase" />
        <FunctionalComponent name="componente funcional" />
      </div>
    </div>
  )
}

export default Workshop
