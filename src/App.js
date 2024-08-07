import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Segment } from 'semantic-ui-react';

import './App.css';

import Rotas from './Rotas';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Rotas />

      

    </div>

    
  );
}

export default App;
