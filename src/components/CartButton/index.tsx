import { ShoppingCart } from 'phosphor-react'

import { Container } from './styles'


interface Props {
  count?: number
}

export function CartButton({ count }: Props) {
  return (
    <Container to='/check-out' title='Carrinho'>
      <ShoppingCart size={24} weight="fill"/>
      { count && ( <span> {count} </span>) }
    </Container>
  )
}
