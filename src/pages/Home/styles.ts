import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  main {
    flex: 1;
    margin: 5rem 0;

    h1 {
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
      font-family: 'Baloo 2';
      color: ${props => props.theme['base-subtitle']};
      margin-bottom: 3rem;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
`;
