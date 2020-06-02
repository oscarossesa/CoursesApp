import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import Clock from './lifecycle/Clock'
import UseStateHook from './hooks/useState/UseStateHook'
import ClassUseState from './hooks/useState/ClassUseState'
import UseEffectHook from './hooks/useEffect/UseEffectHook'
import ClassUseEffect from './hooks/useEffect/ClassUseEffect'

const WorkshopContainer = () => {
  return (
    <>
      <hr />
      <h3>Ejemplo 1: Class component vs Functional component</h3>
      <ul>
        <li>Componente contenedor (Workshop.jsx)</li>
        <li>Componente de clase (ClassComponent.jsx)</li>
        <li>Componente funcional (FunctionalComponent.jsx)</li>
      </ul>
      <div style={{ border: 'solid 6px red' }}>
        Componente funcional <b>contenedor</b> ROJO (Workshop.jsx), como
        contenedor tengo:
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
          <ClassComponent name="Componente de clase" />
          <FunctionalComponent name="componente funcional" />
        </div>
      </div>
      <hr />
      <h3>Ejemplo 2: Estado y ciclo de vida</h3>
      <ul>
        <li>Componente de clase (Clock.jsx)</li>
        <li>Acceso al ciclo de vida de react</li>
        <ul>
          <li>componentDidMount()</li>
          <li>componentWillUnmount()</li>
        </ul>
      </ul>
      <div>
        <Clock />
      </div>
      <div>
        <a
          href="https://es.reactjs.org/docs/state-and-lifecycle.html"
          target="_blank"
        >
          Leer explicación del ciclo de vida aquí...
        </a>
      </div>
      <hr />
      <h3>Ejemplo 3: Hooks, useState</h3>
      <ul>
        <li>Componente funcional (UseStateHook.jsx)</li>
        <li>Componente de clase (ClassUseState.jsx)</li>
      </ul>
      <div style={{ border: 'solid 6px red' }}>
        Componente funcional <b>contenedor</b> ROJO (Workshop.jsx)
        <div className="d-flex justify-content-around">
          <UseStateHook />
          <ClassUseState />
        </div>
      </div>
      <hr />
      <h3>Ejemplo 4: Hooks, useEffect</h3>
      <ul>
        <li>Componente funcional (UseStateHook.jsx)</li>
        <li>Componente de clase (ClassUseState.jsx)</li>
      </ul>
      <div style={{ border: 'solid 6px red' }}>
        Componente funcional <b>contenedor</b> ROJO (Workshop.jsx)
        <div className="d-flex justify-content-around">
          <UseEffectHook />
          <ClassUseEffect />
        </div>
      </div>
      <div className="mt-5"></div>
    </>
  )
}

export default WorkshopContainer
