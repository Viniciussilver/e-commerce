import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as C from './style';
import paths from '../../utils/paths';
import { useEffect, useState } from 'react';
import { Waveform } from '@uiball/loaders';
import { useAuth } from '../../contexts/Auth';
import { Button, Header } from '../../components';

import firebase from '../../services/firebase';

type FormTypes = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const [typeInput, setTypeInput] = useState<'password' | 'text'>('password');
  const navigate = useNavigate();

  const { signIn, loadingAuth, user } = useAuth();

  const { state } = useLocation();

  const schema = yup.object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormTypes) => signIn(data);

  useEffect(() => {
    if (!!user) navigate(paths.products);
  }, []);

  return (
    <C.Container>
      <Header />
      <C.Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <C.Title>Login</C.Title>

        <C.ContainerItem>
          <C.Label htmlFor='email'>Email</C.Label>
          <C.Input
            id='email'
            type='email'
            placeholder='example@gmail.com'
            defaultValue={state?.email}
            {...register('email')}
          />
          <C.ErrorBox>
            <C.Message>{errors.email?.message}</C.Message>
          </C.ErrorBox>
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Label htmlFor='password'>Senha </C.Label>

          <C.Input
            id='password'
            type={typeInput}
            placeholder='***********'
            defaultValue={state?.password}
            {...register('password')}
          />
          <C.ErrorBox>
            <C.Message>{errors.password?.message}</C.Message>
            <C.OutlineEye
              onClick={() => setTypeInput('password')}
              isVisible={typeInput === 'password'}
            />{' '}
            <C.EyeInvisible
              onClick={() => setTypeInput('text')}
              isVisible={typeInput === 'password'}
            />
          </C.ErrorBox>
        </C.ContainerItem>

        <Button type='submit' disabled={loadingAuth}>
          {loadingAuth ? (
            <Waveform size={27} lineWeight={3.7} speed={1} color='white' />
          ) : (
            'Entrar'
          )}
        </Button>

        <C.P>
          Não possuí conta?{' '}
          <Link style={{ color: '#0058a1' }} to={paths.register}>
            Cadastrar
          </Link>
        </C.P>
      </C.Form>
    </C.Container>
  );
};
