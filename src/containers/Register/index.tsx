import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Waveform } from '@uiball/loaders';

import * as C from './style';
import paths from '../../utils/paths';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { Button, Header } from '../../components';

type FormTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const [typeInput, setTypeInput] = useState<'password' | 'text'>('password');
  const navigate = useNavigate();

  const { signUp, loadingAuth, user } = useAuth();

  const schema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
    confirmPassword: yup
      .string()
      .required('A senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormTypes) => signUp(data);

  useEffect(() => {
    if (!!user) navigate(paths.products);
  }, []);

  return (
    <C.Container>
      <Header />
      <C.Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <C.Title>Cadastro</C.Title>

        <C.ContainerItem>
          <C.Label htmlFor='name'>Nome</C.Label>
          <C.Input id='name' type='text' {...register('name')} />
          <C.ErrorBox>
            <C.Message>{errors.name?.message}</C.Message>
          </C.ErrorBox>
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Label htmlFor='email'>Email</C.Label>
          <C.Input id='email' type='email' {...register('email')} />
          <C.ErrorBox>
            <C.Message>{errors.email?.message}</C.Message>
          </C.ErrorBox>
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Label htmlFor='password'>Senha (mínimo 6 caracteres) </C.Label>

          <C.Input id='password' type={typeInput} {...register('password')} />
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

        <C.ContainerItem>
          <C.Label htmlFor='confirm-password'>Confirmar senha </C.Label>

          <C.Input
            id='confirm-password'
            type='password'
            {...register('confirmPassword')}
          />
          <C.ErrorBox>
            <C.Message>{errors.confirmPassword?.message}</C.Message>
          </C.ErrorBox>
        </C.ContainerItem>

        <Button disabled={loadingAuth} type='submit'>
          {loadingAuth ? (
            <Waveform size={27} lineWeight={3.7} speed={1} color='white' />
          ) : (
            'Criar'
          )}
        </Button>

        <C.P>
          Já possuí conta?{' '}
          <Link style={{ color: '#0058a1' }} to={paths.login}>
            Entrar
          </Link>
        </C.P>
      </C.Form>
    </C.Container>
  );
};
