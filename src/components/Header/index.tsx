import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

import { Container, NavActions } from './styles'

export function Header() {
  return (
    <Container>
      <NavLink to='/' title='Home'>
        <img src={logoImg} alt="" />
      </NavLink>

      <NavActions>
        <span title='Localizacão'>
          <MapPin size={24} weight="fill" />
          Porto Alegre
        </span>
        <CartButton />
      </NavActions>
    </Container>
  )
}
