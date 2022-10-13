import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: -1.25rem;

  gap: 1rem;

  span {
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    color: ${props => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    text-transform: uppercase;
  }
`;

export const Info = styled.div`
  margin-top: 1rem;
  width: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-label']};
    text-align: center;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  width: 216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    flex: 1;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};

    strong {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
      font-family: 'Baloo 2';
      color: ${props => props.theme['base-text']};
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme['purple-dark']};
    transition: background-color 200ms;

    &:hover {
      background-color: ${props => props.theme['purple']};
    }
  }
`;

export const AmountButton = styled.div`
  width: 4.5rem;
  height: 2.375rem;

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
    background-color: ${props => props.theme['base-button']};

  }
`;
