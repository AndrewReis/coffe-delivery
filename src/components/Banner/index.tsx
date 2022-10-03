import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import coffeDeliveryImg from '../../assets/coffe-delivery.svg'
import { Item } from './Item'

import { Container, Wrapper, Headings, Items } from './styles'

export function Banner() {
  return (
    <Container>
      <Wrapper>
        <div>
          <Headings>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          </Headings>

          <Items>
            <Item icon={ShoppingCart} backgroundColor='red' color='white' text='Compra simples e segura' />
            <Item icon={Package} backgroundColor='red' color='white' text='Embalagem mantém o café intacto' />
            <Item icon={Timer} backgroundColor='red' color='white' text='Entrega rápida e rastreada' />
            <Item icon={Coffee} backgroundColor='red' color='white' text='O café chega fresquinho até você' />
          </Items>
        </div>

        <img src={coffeDeliveryImg} alt="" />
      </Wrapper>
    </Container>
  )
}
