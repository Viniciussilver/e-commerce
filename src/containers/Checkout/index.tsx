import React, {
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IMask from 'imask';
import toast from 'react-hot-toast';

import { Button, CheckoutItems } from '../../components';
import { useCart } from '../../contexts/CartContext';
import { estados } from '../../utils/estados';
import firebase from '../../services/firebase';
import paths from '../../utils/paths';
import { useAuth } from '../../contexts/Auth';
import * as C from './style';

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  rua: string;
  complemento?: string;
  cidade: string;
  numero: number;
  bairro: string;
  cep: string;
  estado: string;
};

type InputAreaFormTypes = {
  label: string;
  id?: string;
  children: ReactNode;
};

const InputAreaForm = ({ label, id, children }: InputAreaFormTypes) => {
  return (
    <C.InputArea>
      <C.Label htmlFor={id}>
        {label}
        <span>*</span>{' '}
      </C.Label>
      {children}
    </C.InputArea>
  );
};

export const CheckoutForm: React.FC = () => {
  const { user } = useAuth();
  const { cartItems, total, resetCart } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  const cepRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    IMask(cepRef.current as HTMLInputElement, {
      mask: '00000-000',
    });
    IMask(phoneRef.current as HTMLInputElement, {
      mask: '(00) 00000-0000',
    });

    if (!location.state?.checkout || !user) navigate(paths.products);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    let values = {} as FormValues;

    formData.forEach((value, key) => {
      values = { ...values, [key]: value };
    });

    if (
      Object.values({ ...values, complemento: true }).some(value => !value) ||
      !values.estado
    ) {
      return alertErrorSubmitForm('Preencha todos os campos');
    }

    const regexPhone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    if (!regexPhone.test(values.telefone))
      return alertErrorSubmitForm('Número de telefone invalido');

    const regexCep = /^[0-9]{5}-[0-9]{3}$/;
    if (!regexCep.test(values.cep)) return alertErrorSubmitForm('Cep invalido');

    const newOrder = {
      data: new Date(),
      ...values,
      valor: total,
      produtos: cartItems,
      status: 'Pedido Realizado',
    };

    await toast.promise(
      firebase
        .firestore()
        .collection('infoUsers')
        .doc(user?.uid)
        .update({
          pedidos: firebase.firestore.FieldValue.arrayUnion(newOrder),
        }),
      {
        loading: 'Enviando pedido',
        success: <b>Pedido realizado com sucesso</b>,
        error: <b>Falha ao tentar realizar o seu pedido, tente novamente</b>,
      }
    );

    setTimeout(() => {
      navigate(paths.products, { state: { showOrders: true } });
      resetCart();
    }, 1200);
  };

  const alertErrorSubmitForm = (message: string) => alert(message);

  return (
    <C.Container>
      <C.ContainerCheckout>
        <C.FormContainer>
          <C.Form onSubmit={handleSubmit}>
            <C.Header>
              <C.Title> Confirmar dados(Entrega)</C.Title>
            </C.Header>

            <C.ItemsForm>
              <C.ContainerItem>
                <InputAreaForm label='NOME COMPLETO' id='nome'>
                  <C.Input
                    type='text'
                    id='nome'
                    name='nome'
                    placeholder='Seu nome'
                  />
                </InputAreaForm>

                <InputAreaForm label='TELEFONE' id='telefone'>
                  <C.Input
                    id='telefone'
                    type='text'
                    ref={phoneRef}
                    name='telefone'
                    placeholder='(00) 00000-0000'
                  />
                </InputAreaForm>

                <InputAreaForm label='RUA' id='rua'>
                  <C.Input
                    type='text'
                    id='rua'
                    name='rua'
                    placeholder='Nome da rua'
                  />
                </InputAreaForm>

                <InputAreaForm label='COMPLEMENTO' id='complemento'>
                  <C.Input
                    type='text'
                    id='complemento'
                    name='complemento'
                    placeholder='Complemento (opcional)'
                  />
                </InputAreaForm>
              </C.ContainerItem>
              <C.ContainerItem>
                <InputAreaForm label='EMAIL' id='email'>
                  <C.Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Endereço de e-mail'
                  />
                </InputAreaForm>

                <InputAreaForm label='CIDADE' id='cidade'>
                  <C.Input
                    type='text'
                    id='cidade'
                    name='cidade'
                    placeholder='Cidade'
                  />
                </InputAreaForm>

                <C.RowInputArea>
                  <InputAreaForm label='NÚMERO' id='numero'>
                    <C.Input
                      type='number'
                      id='numero'
                      name='numero'
                      placeholder='Número da residência'
                    />
                  </InputAreaForm>

                  <InputAreaForm label='BAIRRO' id='bairro'>
                    <C.Input
                      type='text'
                      id='bairro'
                      name='bairro'
                      placeholder='Bairro'
                    />
                  </InputAreaForm>
                </C.RowInputArea>
                <C.RowInputArea>
                  <InputAreaForm label='CEP' id='cep'>
                    <C.Input
                      type='text'
                      id='cep'
                      ref={cepRef}
                      name='cep'
                      placeholder='00000-000'
                    />
                  </InputAreaForm>
                  <InputAreaForm label='ESTADO' id='select-estado'>
                    <C.Select id='select-estado' name='estado'>
                      <option value='' disabled selected>
                        Estado
                      </option>

                      {estados.map(estado => (
                        <option key={estado.sigla} value={estado.nome}>
                          {estado.sigla}
                        </option>
                      ))}
                    </C.Select>
                  </InputAreaForm>
                </C.RowInputArea>
              </C.ContainerItem>
            </C.ItemsForm>
            <div
              style={{
                display: 'flex',
                gap: 15,
                alignItems: 'flex-end',
              }}
            >
              <Button type='submit' styles={{ width: '200px' }}>
                Finalizar pedido
              </Button>

              <C.LinkCancel onClick={() => navigate(paths.products)}>
                Cancelar e voltar
              </C.LinkCancel>
            </div>
          </C.Form>
        </C.FormContainer>

        <CheckoutItems products={cartItems} total={total} />
      </C.ContainerCheckout>
    </C.Container>
  );
};
