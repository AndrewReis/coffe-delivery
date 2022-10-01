import { MapPin } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

import { Container, NavActions } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="" />

        <NavActions>
          <span title='Localizacão'>
            <MapPin size={24} weight="fill" />
            Porto Alegre
          </span>
          <CartButton />
        </NavActions>
      </div>
    </Container>
  )
}
