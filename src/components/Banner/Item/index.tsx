import { IconProps } from 'phosphor-react'

import { Container, COLORS } from "./styles";

interface Props {
  icon: React.ComponentType<IconProps>;
  text: string;
  backgroundColor: keyof typeof COLORS;
}

export function Item({ icon: Icon, backgroundColor, text }: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
      <div>
        <Icon size={20} weight='fill' color='white' />
      </div>
      <span>{text}</span>
    </Container>
  )
}
