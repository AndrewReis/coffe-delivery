import styled, { css } from "styled-components";

interface Props {
  selected: boolean
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  height: 3.125rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-button']};

  span {
    flex: 1;
    font-size: 0.75rem;
    margin-left: 12px;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    text-align: left;
    color: ${props => props.theme['base-text']};
  }

  ${(props) =>
    props.selected && css`
      background-color: ${props => props.theme['purple-light']};
      border: 1px solid ${props => props.theme['purple']};
    `
  };
`;
