import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { lazy } from "react"

const Simple = lazy(() => import("./Components/Simple/Simple"))
const Rentable = lazy(() => import("./Components/Rentable/Rentable"))

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/simple/:id" element={<Simple />} />

               <Route path="rentable/:id" element={<Rentable />} />

               <Route path="*" element={<h1>404</h1>} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App
