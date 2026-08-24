import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'
import Oportunidade from './pages/oportunidades/Oportunidade'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sobre" element={<Sobre />} />
         <Route path="/oportunidades" element={<Oportunidade />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
