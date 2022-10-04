import { ShoppingCart } from 'phosphor-react'

import coffeImg from '../../assets/expresso-tradicional.png'

import { defaultTheme } from '../../styles/themes/default'
import { Container, Header, Info, Footer } from "./styles";

export function CoffeCard() {
  return (
    <Container>
      <Header>
        <img src={coffeImg} alt="" />
        <span>Tradicional</span>
      </Header>

      <Info>
        <strong>Expresso Tradicional</strong>
        <p>
          O tradicional café feito com água quente e grãos moídos
        </p>
      </Info>

      <Footer>
        <span>R$ <strong>9,90</strong></span>

        <div>
          <input type="number" />
          <button type='button'>
            <ShoppingCart size={20} weight='fill' color={defaultTheme.white} />
          </button>
        </div>
      </Footer>
    </Container>
  )
}
