import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from './components/menu/Menu'
import Home from './pages/home/Home'
import Habilidades from './pages/habilidades/habilidades'
import Projetos from './pages/projetos/Projetos'
import Contato from "./pages/contato/Contato"
import Comentarios from './pages/comentarios/Comentarios'
import Footer from './components/footer/footer'

function ApplicationRoutes() {
    return (
    <BrowserRouter> 
    <Menu />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/comentarios" element={<Comentarios/>} />
    </Routes>
    <Footer />
    </BrowserRouter>

    )
}

export default ApplicationRoutes