import './App.css';
import { Component } from 'react';
import MenuInicial from './componentes/MenuInicial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLogin from './componentes/PageLogin';
import PageInicio from './componentes/PageInicio';
import PageDeportes from './componentes/PageDeportes'
import PageEquipos from './componentes/PageEquipos'
import PageUsuarios from './componentes/PageUsuarios'
import PageEventos from './componentes/PageEventos'



class App extends Component {
  render(){
    return (

      <Router>
        <MenuInicial />
          <Routes>
            <Route path='/' element={<PageInicio />} />
            <Route path='/PageInicio' element={<PageInicio />} />
            <Route path='/PageLogin' element={<PageLogin />} />
            <Route path='/PageEventos' element={<PageEventos />} />
            <Route path='/PageDeportes' element={<PageDeportes />} />
            <Route path='/PageEquipos' element={<PageEquipos />} />
            <Route path='/PageUsuarios' element={<PageUsuarios />} />
          </Routes>
      </Router>

      /*<Router>
        <MenuAdmin />
          <Routes>
            <Route path='/PageInicio' element={<PageInicio />} />
            <Route path='/PageUsuarios' element={<PageUsuarios />} />
            <Route path='/PageDeportes' element={<PageDeportes />} />
            <Route path='/PageEquipos' element={<PageEquipos />} />
            <Route path='/PageEventos' element={<PageEventos />} />
          </Routes>
      </Router>*/
    )
  }
}

export default App;
