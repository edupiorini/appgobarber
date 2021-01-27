import React from 'react';
import { ButtonText, Container } from './style';

const Button: React.FC = ({ children }) => (
  <Container>
    <ButtonText>{children}</ButtonText>
  </Container>
);
export default Button;
