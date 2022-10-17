import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Main = styled.main`
  width: 100%;
  margin: 2.5rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
  }

  @media (max-width:768px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 2.5rem;
  margin-top: 1rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;

  fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    border: none;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: start;

  gap: 0.5rem;
  margin-bottom: 2rem;

  legend {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
    gap: 2px;

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${props => props.theme['base-text']};
    }
  }

  @media (max-width:500px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: 0.75rem;
`;

export const LocalizationContainer = styled(Grid)`
  grid-template-columns: 12.5rem 1fr;

  @media (max-width:500px) {
    grid-template-columns: 1fr;
  }
`;

export const PublicPlaceContainer = styled(Grid)`
  grid-template-columns: 12.5rem 1fr 3.75rem;

  @media (max-width:500px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  margin-top: 1rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;

  fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    border: none;
  }
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.75rem;

  @media (max-width:500px) {
    grid-template-columns: 1fr;
  }
`;

export const Command = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 1rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
`;
