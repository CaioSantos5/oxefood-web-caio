import axios from 'axios'
//import React, { useState } from 'react'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask'
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react'
//import { Link } from "react-router-dom";
import MenuSistema from '../../MenuSistema'
import {mensagemErro, notifyError, notifySuccess } from '../util/Mensagens';

export default function FormCliente() {
  const [nome, setNome] = useState()
  const [cpf, setCpf] = useState()
  const [dataNascimento, setDataNascimento] = useState()
  const [foneCelular, setFoneCelular] = useState()
  const [foneFixo, setFoneFixo] = useState()
  const { state } = useLocation();
  const [idCliente, setIdCliente] = useState();
  const [listaCategoria, setListaCategoria] = useState([]);
   const [idCategoria, setIdCategoria] = useState();


  function formatarData(dataParam) {
    if (dataParam === null || dataParam === '' || dataParam === undefined) {
      return ''
    }

    let arrayData = dataParam.split('-')
    return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0]
  }

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get("http://localhost:8081/api/cliente/" + state.id)
        .then((response) => {
          setIdCliente(response.data.id)
          setNome(response.data.nome)
          setCpf(response.data.cpf)
          setDataNascimento(formatarData(response.data.dataNascimento))
          setFoneCelular(response.data.foneCelular)
          setFoneFixo(response.data.foneFixo)
          setIdCategoria(response.data.categoria.id)
        })
    }
    axios.get("http://localhost:8081/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

  }, [state])


  function salvar() {
    let clienteRequest = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
    }

    if (idCliente != null) { //Alteração:
      axios.put("http://localhost:8081/api/cliente/" + idCliente, clienteRequest)
        .then((response) => { console.log('Cliente alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um cliente.') })
    } else { //Cadastro:
      axios.post("http://localhost:8081/api/cliente", clienteRequest)
        .then((response) => { notifySuccess('Cliente cadastrado com sucesso.') })
        .catch((error) => { if (error.response) {
          notifyError(error.response.data.message)
          } else {
          notifyError(mensagemErro)
          }
           })
    }

  }

  return (
    <div>
      <MenuSistema />

      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          {idCliente === undefined &&
            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
          }
          {idCliente != undefined &&
            <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
          }


          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Nome'
                  maxLength='100'
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label='CPF'
                >
                  <InputMask
                    required
                    mask='999.999.999-99'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Select
                required
                fluid
                tabIndex='3'
                placeholder='Selecione'
                label='Categoria'
                options={listaCategoria}
                value={idCategoria}
                onChange={(e, { value }) => {
                  setIdCategoria(value)
                }}
              />


              <Form.Group>
                <Form.Input
                  fluid
                  label='Fone Celular'
                  width={6}
                >
                  <InputMask
                    mask='(99) 9999.9999'
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='Fone Fixo'
                  width={6}
                >
                  <InputMask
                    mask='(99) 9999.9999'
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='Data Nascimento'
                  width={6}
                >
                  <InputMask
                    mask='99/99/9999'
                    maskChar={null}
                    placeholder='Ex: 20/03/1985'
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>
            </Form>

            <div style={{ marginTop: '4%' }}>

              <Link to={'/list-cliente'}>

                <Button
                  type='button'
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='orange'
                >
                  <Icon name='reply' />
                  Voltar
                </Button>

              </Link>

              <Button
                inverted
                circular
                icon
                labelPosition='left'
                color='blue'
                floated='right'
                onClick={() => salvar()}
              >
                <Icon name='save' />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
