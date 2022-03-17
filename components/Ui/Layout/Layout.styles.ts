import styled from "styled-components";
import { Screen } from "../../../enum/screen";

export const Attribution = styled.a`
  color: hsl(228, 45%, 44%);
  font-size: 0.75rem;
`;

export const Container = styled.div`
  padding: 0 2rem;

  @media (max-width: ${Screen.SMALL}) {
    padding: 0;
  }
`;

export const Footer = styled.footer`
  padding: 2rem 0;
  font-size: 0.75rem;
  text-align: center;
`;

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  height: 266.75px;
  max-width: 90%;
  position: relative;
  width: 25rem;

  @media (max-width: ${Screen.SMALL}) {
    display: none;
  }
`;
