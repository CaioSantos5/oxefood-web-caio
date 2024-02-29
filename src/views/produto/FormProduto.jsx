import React from 'react'
import InputMask from 'react-input-mask'
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react'
import {
  FormGroup,
  FormField,
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

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
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Título'
                  maxLength='100'
                  placeholder='Informe o título do produto'
                />

                <Form.Input
                  required
                  fluid
                  label='Código do Produto'
                  maxLength='100'
                  placeholder='Informe o código do produto'
                ></Form.Input>
              </Form.Group>

              <Form.Group>
                <FormField
                  control={TextArea}
                  label='Descrição'
                  placeholder='Informe a descrição do produto'
                  width={16}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                required
                  fluid
                  label='Valor unitário'
                  width={6}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Tempo de entrega mínimo em minutos'
                  placeholder='30'
                  width={6}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Tempo de entrega máximo em minutos'
                  placeholder='40'
                  width={6}
                ></Form.Input>
              </Form.Group>
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
