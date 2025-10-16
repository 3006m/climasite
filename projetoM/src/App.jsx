import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projeto from './pages/projeto'
import Simulacao from './pages/simulacao'
import Hardware from './pages/hardware'
import Software from './pages/software'
import FAQ from './pages/faq'
import Resultados from './pages/resultados'
import Equipe from './pages/equipe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/simulacao" element={<Simulacao />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App