import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import coffeDeliveryImg from '../../assets/coffe-delivery.svg'
import { Item } from './Item'

import { Container, Headings, Items } from './styles'

export function Banner() {
  return (
    <Container>
      <div>
        <Headings>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        </Headings>

        <Items>
          <Item icon={ShoppingCart} backgroundColor='yellow-dark' text='Compra simples e segura' />
          <Item icon={Package} backgroundColor='base-text' text='Embalagem mantém o café intacto' />
          <Item icon={Timer} backgroundColor='yellow' text='Entrega rápida e rastreada' />
          <Item icon={Coffee} backgroundColor='purple' text='O café chega fresquinho até você' />
        </Items>
      </div>

      <img src={coffeDeliveryImg} alt="" />
    </Container>
  )
}
