import React from 'react'
import InputMask from 'react-input-mask'
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react'
import {
  FormGroup,
  FormSelect,
  FormRadio,
  FormField,
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const handleChange = (e, { value }) => this.setState({ value })

export default function FormProduto() {
  return (
    <div>
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            {' '}
            <span style={{ color: 'darkgray' }}>
              {' '}
              Cliente &nbsp;
              <Icon
                name='angle double right'
                size='small'
              />{' '}
            </span>{' '}
            Cadastro{' '}
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              <Form.Group>
                <Form.Input
                  required
                  fluid
                  label='Nome'
                  maxLength='100'
                  width={9}
                />

                <Form.Input
                  required
                  fluid
                  label='CPF'
                  width={5}
                >
                  <InputMask
                    required
                    mask='999.999.999-99'
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='RG'
                  maxLength='100'
                  width={5}
                ></Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label='Data Nascimento'
                  width={6}
                >
                  <InputMask
                    mask='99/99/9999'
                    maskChar={null}
                    placeholder='Ex: 20/03/1985'
                  />
                </Form.Input>
                <Form.Input
                  required
                  fluid
                  label='Fone Celular'
                  width={6}
                >
                  <InputMask mask='(99) 9999.9999' />
                </Form.Input>
                <Form.Input
                  fluid
                  label='Fone Fixo'
                  width={6}
                >
                  <InputMask mask='(99) 9999.9999' />
                </Form.Input>

                <Form.Input
                  fluid
                  label='QTD Entregas Realizadas'
                  maxLength='100'
                  width={6}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Valor Por Frete'
                  maxLength='100'
                  width={6}
                ></Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  required
                  fluid
                  label='Rua'
                  width={14}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Número'
                  width={4}
                ></Form.Input>
              </Form.Group>
              <Form.Group>
                <Form.Input
                  fluid
                  label='Bairro'
                  width={8}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Cidade'
                  width={8}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='CEP'
                  width={2}
                ></Form.Input>
              </Form.Group>
              <Form.Group>
                <FormSelect
                  fluid
                  label='UF'
                  options={options}
                  placeholder='Selecione'
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  fluid
                  label='Complemento'
                  width={16}
                ></Form.Input>
              </Form.Group>
              <FormGroup inline>
                <label>Ativo</label>
                <FormRadio
                  label='Sim'
                  value='sm'
                  //checked={value === 'sm'}
                  //onChange={this.handleChange}
                />
                <FormRadio
                  label='Não'
                  value='md'
                  //checked={value === 'md'}
                  //onChange={this.handleChange}
                />
              </FormGroup>
            </Form>

            <div style={{ marginTop: '4%' }}>
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

              <Button
                inverted
                circular
                icon
                labelPosition='left'
                color='blue'
                floated='right'
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
