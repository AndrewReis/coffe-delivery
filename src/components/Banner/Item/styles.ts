import styled from "styled-components";

export const COLORS = {
  'yellow': 'yellow',
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  'purple' : 'purple'
} as const

interface Props {
  backgroundColor: keyof typeof COLORS
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme[COLORS[props.backgroundColor]]};
    border-radius: 50%;
    padding: 8px;
  }

  span {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${props => props.theme['base-text']};
    margin-left: 0.75rem;
    white-space: nowrap;
  }
`;
