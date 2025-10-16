import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Perguntas from './pages/perguntas'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perguntas-respostas" element={<Perguntas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App