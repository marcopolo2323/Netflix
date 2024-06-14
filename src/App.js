import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Center from './Components/Centro';
import Presentacion from './Components/Inicio/Presentacion';
import Login from './Components/login/login';


function App() {
  return (
    <Router>
      <div className="contenedor_app">
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Center />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




//git fetch ===> Para actualizar los branch
//git add .
//git commit -m "Cambios de la rama 30/5/24"
//git push origin Rama1
//**************** */
//en github se pone en newpull request y lo comparamos