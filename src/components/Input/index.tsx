import { InputHTMLAttributes } from "react"

import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string
}

export function Input({ id, label, ...rest }: Props) {
  return (
    <Container>
      <label htmlFor={id}> { label } </label>
      <input id={id} {...rest} />
    </Container>
  )
}
