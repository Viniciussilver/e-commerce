import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DotPulse } from '@uiball/loaders';
import IMask from 'imask';
import toast from 'react-hot-toast';
import { v4 as uuid } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';

import { Button, CheckoutItems } from '../../components';
import { useCart } from '../../contexts/CartContext';
import { estados } from '../../utils/estados';
import firebase from '../../services/firebase';
import paths from '../../utils/paths';
import { useAuth } from '../../contexts/Auth';
import * as C from './style';
import { InputAreaForm } from './InputAreaForm';
import { IForm } from '../../@types/Form';
import formatDate from '../../utils/formatDate';

export const CheckoutForm: React.FC = () => {
  const { user } = useAuth();
  const { cartItems, total, resetCart } = useCart();
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [cepValue, setCepValue] = useState('');

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

    if (!location.state?.checkout || !user || !cartItems)
      navigate(paths.products);
  }, []);

  const schema = Yup.object().shape({
    nome: Yup.string().required(),
    email: Yup.string().email().required(),
    telefone: Yup.mixed()
      .test(value => {
        return /^\(\d{2}\)\s\d{5}-\d{4}$/.test(value);
      })
      .required(),
    rua: Yup.string().required(),
    complemento: Yup.string(),
    cidade: Yup.string().required(),
    numero: Yup.string().required(),
    bairro: Yup.string().required(),
    cep: Yup.mixed()
      .test(value => {
        return /^[0-9]{5}-[0-9]{3}$/.test(value);
      })
      .required(),
    estado: Yup.object().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: IForm) => {
    setLoading(true);

    const orderId = uuid();
    const date = new Date();
    const newOrder = {
      id: orderId,
      data: formatDate(date),
      ...data,
      valor: total,
      produtos: cartItems,
      status: 'Pedido realizado',
    };

    await firebase
      .firestore()
      .collection('infoUsers')
      .doc(user?.uid)
      .update({
        pedidos: firebase.firestore.FieldValue.arrayUnion(newOrder),
      });

    localStorage.setItem(
      '@showOrder',
      JSON.stringify({ showOrder: true, orderId: orderId })
    );

    setLoading(false);
    toast.success('Pedido realizado com sucesso');

    setTimeout(() => {
      navigate(paths.products);

      resetCart();
    }, 1400);
  };

  const alertErrorSubmitForm = (message: string) => alert(message);

  return (
    <C.Container>
      <C.ContainerCheckout>
        <C.FormContainer>
          <C.Form onSubmit={handleSubmit(onSubmit)}>
            <C.Header>
              <C.Title> Confirmar dados(Entrega)</C.Title>
            </C.Header>

            <C.ItemsForm>
              <C.ContainerItem>
                <InputAreaForm label='NOME COMPLETO' id='nome'>
                  <C.Input
                    textError={errors.nome?.message}
                    type='text'
                    id='nome'
                    placeholder='Seu nome'
                    {...register('nome')}
                  />
                </InputAreaForm>

                <InputAreaForm label='TELEFONE' id='telefone'>
                  <Controller
                    name='telefone'
                    control={control}
                    render={({ field }) => (
                      <C.Input
                        textError={errors.telefone?.message}
                        {...field}
                        id='telefone'
                        type='text'
                        ref={phoneRef}
                        value={phoneValue}
                        placeholder='(00) 00000-0000'
                        onChange={e => setPhoneValue(e.target.value)}
                      />
                    )}
                  />
                </InputAreaForm>

                <InputAreaForm label='RUA' id='rua'>
                  <C.Input
                    type='text'
                    id='rua'
                    placeholder='Nome da rua'
                    textError={errors.rua?.message}
                    {...register('rua')}
                  />
                </InputAreaForm>

                <InputAreaForm label='COMPLEMENTO' id='complemento'>
                  <C.Input
                    textError={errors.complemento?.message}
                    type='text'
                    id='complemento'
                    placeholder='Complemento (opcional)'
                    {...register('complemento')}
                  />
                </InputAreaForm>
              </C.ContainerItem>
              <C.ContainerItem>
                <InputAreaForm label='EMAIL' id='email'>
                  <C.Input
                    textError={errors.email?.message}
                    type='email'
                    id='email'
                    placeholder='Endereço de e-mail'
                    {...register('email')}
                  />
                </InputAreaForm>

                <InputAreaForm label='CIDADE' id='cidade'>
                  <C.Input
                    textError={errors.cidade?.message}
                    type='text'
                    id='cidade'
                    placeholder='Cidade'
                    {...register('cidade')}
                  />
                </InputAreaForm>

                <C.RowInputArea>
                  <InputAreaForm label='NÚMERO' id='numero'>
                    <C.Input
                      textError={errors.numero?.message}
                      type='number'
                      id='numero'
                      placeholder='Número da residência'
                      {...register('numero')}
                    />
                  </InputAreaForm>

                  <InputAreaForm label='BAIRRO' id='bairro'>
                    <C.Input
                      textError={errors.bairro?.message}
                      type='text'
                      id='bairro'
                      placeholder='Bairro'
                      {...register('bairro')}
                    />
                  </InputAreaForm>
                </C.RowInputArea>
                <C.RowInputArea>
                  <InputAreaForm label='CEP' id='cep'>
                    <Controller
                      name='cep'
                      control={control}
                      render={({ field }) => (
                        <C.Input
                          {...field}
                          textError={errors.cep?.message}
                          id='cep'
                          type='text'
                          ref={cepRef}
                          placeholder='00000-000'
                          value={cepValue}
                          onChange={e => setCepValue(e.target.value)}
                        />
                      )}
                    />
                  </InputAreaForm>
                  <InputAreaForm label='ESTADO' id='select-estado'>
                    <Controller
                      name='estado'
                      control={control}
                      render={({ field }) => (
                        <C.SelectStyles
                          textError={errors.estado?.message}
                          {...field}
                          options={estados}
                          placeholder='Estado'
                        />
                      )}
                    />
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
                {!loading && <p>Finalizar pedido</p>}
                {loading && (
                  <C.LoadingBox>
                    <p>Enviando</p>
                    <DotPulse size={18} speed={2.2} color='#e0dddd' />
                  </C.LoadingBox>
                )}
              </Button>

              <C.LinkCancel onClick={() => navigate(paths.products)}>
                Cancelar e voltar
              </C.LinkCancel>
            </div>
          </C.Form>
        </C.FormContainer>
      </C.ContainerCheckout>
      <CheckoutItems products={cartItems} total={total} />
    </C.Container>
  );
};
