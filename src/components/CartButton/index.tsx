import { ShoppingCart } from 'phosphor-react'
import { useCart } from '../../context/cart-context'

import { Container, Notification } from './styles'

export function CartButton() {
  const { cart } = useCart()

  return (
    <Container to='/check-out' title='Carrinho'>
      <ShoppingCart size={24} weight="fill"/>
      { cart.length > 0 && ( <Notification> {cart.length} </Notification>) }
    </Container>
  )
}
