import React from "react"
import MobileMenu from "./Components/MobileMenu/index"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { fetchReadingPlans } from "./features/readingPlans/readingplansSlice"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"

function App() {
  const disptach = useAppDispatch()

  React.useEffect(() => {
    disptach(fetchReadingPlans())
  }, [])
  return (
    <div className="App ">
      <NavBar />
      <div className="mt-[9rem]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <MobileMenu />
    </div>
  )
}

export default App
