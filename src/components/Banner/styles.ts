import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: 588px 1fr;
  justify-content: center;
  gap: 56px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 66px;
  }

  @media (max-width:720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Headings = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${props => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const Items = styled.div`
  width: 100%;
  display: grid;
  gap: 20px 40px;
  grid-template-columns: 231px 1fr;


  @media (max-width:720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
