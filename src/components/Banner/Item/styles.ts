import styled from "styled-components";

interface Props {
  backgroundColor: string
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
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
