import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

import * as C from './style';
import { auth } from '../../services/firebase';
import paths from '../../utils/paths';
import { useState } from 'react';
import { Waveform } from '@uiball/loaders';

type FormTypes = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const [typeInput, setTypeInput] = useState<'password' | 'text'>('password');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const onSubmit = async (data: FormTypes) => {
    setIsLoading(true);

    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
      .then(() => {
        toast.success('Seja bem vindo(a)', {
          autoClose: 2000,
        });

        setTimeout(() => navigate(paths.home), 1100);
      })
      .catch(() =>
        toast.error('Verifique seu e-mail e senha', {
          autoClose: 2000,
        })
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <C.Title>Login</C.Title>

        <C.ContainerItem>
          <C.Label htmlFor='email'>Email</C.Label>
          <C.Input
            id='email'
            type='email'
            placeholder='Digite seu email...'
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
            placeholder='Digite sua senha...'
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

        <C.Button disabled={isLoading} type='submit'>
          {isLoading ? (
            <Waveform size={27} lineWeight={3.7} speed={1} color='white' />
          ) : (
            'Entrar'
          )}
        </C.Button>

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
