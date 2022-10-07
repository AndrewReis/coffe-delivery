import { IconProps } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react';

import { defaultTheme } from '../../styles/themes/default';

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconProps>;
  text: string;
  isSelected: boolean
}

export function Button({ icon: Icon, text, isSelected = false, ...rest }: Props) {
  return (
    <Container selected={isSelected} {...rest} >
      <Icon size={16} color={defaultTheme["purple"]} />
      <span>{ text }</span>
    </Container>
  )
}
