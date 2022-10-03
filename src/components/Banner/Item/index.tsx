import { IconProps } from 'phosphor-react'

import { Container } from "./styles";

interface Props {
  icon: React.ComponentType<IconProps>;
  text: string;
  backgroundColor: string;
  color: string;
}

export function Item({ icon: Icon, backgroundColor, color, text }: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
      <div>
        <Icon size={20} weight='fill' color={color} />
      </div>
      <span>{text}</span>
    </Container>
  )
}
