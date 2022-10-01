import { ShoppingCart } from 'phosphor-react'

import { Container } from './styles'


interface Props {
  count?: number
}

export function CartButton({ count }: Props) {
  return (
    <Container to='/cart' title='Carrinho'>
      <ShoppingCart size={24} weight="fill"/>
      { count && ( <span> {count} </span>) }
    </Container>
  )
}
