import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; //se usa el (as) para renombrar
import NavBar from '../components/Navbar';
import Ropa from '../components/Ropa';
import Vitrina from '../components/Vitrina';
import Formulario from '../components/Formulario';
import Tabla from '../components/Tabla';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/form" element={<Formulario />} />
        <Route path="/ropa" element={<Ropa />} />
        <Route path="/tabla" element={<Tabla />} />
        <Route path="/" element={<Vitrina />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


