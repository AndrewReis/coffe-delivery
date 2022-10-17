import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${props => props.theme['base-button']};

  margin-bottom: 1.5rem;

  strong {
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }
`;

export const Info = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    height: 4rem;
    background-size: cover;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 0.5rem;
`;

export const TrashButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;

  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  transition:  background-color 200ms;

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }
`;
