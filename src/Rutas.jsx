import { Route as R1, Routes as R2 } from "react-router-dom"
import Home from "./pages/Home/Home"

export default function Rutas() {
  return (
    <>
    <R2>
      <R1 path='/' element={<Home/>} />
      <R1 path='*' element={<h1>¿404?</h1>} />
    </R2>
    </>
  )
}

