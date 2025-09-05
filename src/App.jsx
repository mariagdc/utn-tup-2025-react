import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecetaPage from './pages/receta'


function Saludo() {
  return (
    <p>Hola que tal</p>
  )
}
const productos = [
    {nombre: "Caja", id: 1},
    {nombre: "Caño", id: 2},
    {nombre: "Vara", id: 3}
]
function App() {
  return (
    <>
      <RecetaPage/>
    </>
  )
}

export default App
