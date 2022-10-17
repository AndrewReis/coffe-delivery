import styled from "styled-components";

export const Container = styled.div`
  width: 4.5rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-button']};

  span {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    text-align: center;
    color: ${props => props.theme['base-title']};
  }

  button {
    width: 0.875rem;
    height: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['base-button']};
  }
`;
