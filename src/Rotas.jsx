import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import ListEntregador from './views/entregador/ListEntregador';
import FormEntregador from './views/entregador/FormEntregador';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import Home from './views/home/Home';
import FormFornecedor from './views/fornecedor/FormFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> }/>
                <Route path="form-fornecedor" element={ <FormFornecedor/> }/>
                <Route path="list-fornecedor" element={ <ListFornecedor/> }
                 />
            </Routes>
        </>
    )
}

export default Rotas
