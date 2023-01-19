import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Waveform } from '@uiball/loaders';

import * as C from './style';
import { auth } from '../../services/firebase';
import paths from '../../utils/paths';
import { useState } from 'react';

type FormTypes = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [typeInput, setTypeInput] = useState<'password' | 'text'>('password');

  const navigate = useNavigate();

  const schema = yup.object({
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

  const onSubmit = async (data: FormTypes) => {
    setIsLoading(true);

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        toast.success('Cadastro criado com sucesso', {
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate(paths.login, {
            state: { email: data.email, password: data.password },
          });
        }, 1100);
      })
      .catch(() =>
        toast.error('Email já cadastrado', {
          autoClose: 2000,
        })
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <C.Title>Cadastro</C.Title>

        <C.ContainerItem>
          <C.Label htmlFor='email'>Email</C.Label>
          <C.Input
            id='email'
            type='email'
            placeholder='Digite seu email...'
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

        <C.ContainerItem>
          <C.Label htmlFor='confirm-password'>Confirmar senha </C.Label>

          <C.Input
            id='confirm-password'
            type='password'
            placeholder='Digite sua senha...'
            {...register('confirmPassword')}
          />
          <C.ErrorBox>
            <C.Message>{errors.confirmPassword?.message}</C.Message>
          </C.ErrorBox>
        </C.ContainerItem>

        <C.Button disabled={isLoading} type='submit'>
          {isLoading ? (
            <Waveform size={27} lineWeight={3.7} speed={1} color='white' />
          ) : (
            'Criar'
          )}
        </C.Button>

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
