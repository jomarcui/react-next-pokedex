import styled from "styled-components";
import { Screen } from "../../enum/screen";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  button {
    flex-grow: 1;
    width: auto;
  }

  @media (max-width: ${Screen.SMALL}) {
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  @media (max-width: ${Screen.MEDIUM}) {
    flex-flow: row wrap;
    justify-content: space-between;
  }

  @media (min-width: ${Screen.LARGE}) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
