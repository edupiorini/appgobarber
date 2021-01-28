import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';
import {
  CreateAccountButton,
  CreateAccountButtonText,
  ForgotPassword,
  ForgotPasswordText,
} from '../../components/Button/style';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title>Faça seu logon</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />
        <Button
          onPress={() => {
            // eslint-disable-next-line no-console
            console.log('Deu');
          }}
        >
          Entrar
        </Button>

        <ForgotPassword
          onPress={() => {
            // eslint-disable-next-line no-console
            console.log('esqueci');
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
