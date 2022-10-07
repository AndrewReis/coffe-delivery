import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    visibility: hidden;
  }

  input {
    width: 100%;
    height: 2.625rem;
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;

    outline-color: ${props => props.theme['yellow-dark']};

    &::placeholder {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${props => props.theme['base-label']};
    }
  }
`;
