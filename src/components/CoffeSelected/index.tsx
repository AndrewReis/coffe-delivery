import { Trash } from 'phosphor-react'
import igm from '../../assets/expresso-tradicional.png'
import { defaultTheme } from '../../styles/themes/default'
import { Counter } from '../Counter'

import { Container, Info, Details, Actions, TrashButton } from './styles'

export function CoffeSelected() {
  return (
    <Container>
      <Info>
        <img src={igm} alt="" />
        <Details>
          <strong>Expresso Tradicional</strong>
          <Actions>
            <Counter />
            <TrashButton>
              <Trash size={16} color={defaultTheme.purple} />
              remover
            </TrashButton>
          </Actions>
        </Details>
      </Info>
      <strong>R$ 9,90</strong>
    </Container>
  )
}
