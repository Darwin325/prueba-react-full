import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { lazy } from 'react'

const Simple = lazy(()=> import('./Components/Simple/Simple'))

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/simple/:id" element={<Simple/>} />

        <Route path="about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
