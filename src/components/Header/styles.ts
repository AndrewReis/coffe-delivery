import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;
`;

export const NavActions = styled.nav`
  display: flex;
  align-items: center;

  span {
    flex: 1;
    height: 2.375rem;

    display: flex;
    align-items: center;
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-weight: 400;
    margin-left: 0.75rem;
    padding: 8px;
    border-radius: 6px;

    svg {
      fill: ${props => props.theme['purple']};
    }
  }
`;
