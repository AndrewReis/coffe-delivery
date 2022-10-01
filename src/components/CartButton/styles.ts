import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled(NavLink)`
  width: 2.375rem;
  height: 2.375rem;
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  margin-left: 0.75rem;
  padding: 8px;
  border-radius: 6px;

  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: -8px;
    right: -8.35px;
    border-radius: 50%;
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
