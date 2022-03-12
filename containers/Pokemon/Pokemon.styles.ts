import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Colors } from "../../enum/colors";
import { Screen } from "../../enum/screen";
import { changeOpacity } from "../../helpers/colors";

interface IGlobalStyle {
  backgroundColor?: string;
}

interface IType {
  backgroundColor?: string;
  color?: string;
}

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  body, html {
    background: ${({ backgroundColor }) => backgroundColor || Colors.WHITE};
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  margin: 0 auto;
  position: relative;
  width: 200px;
  top: 35px;
`;

export const MasterContainer = styled.div`
  width: 100%;

  @media (min-width: ${Screen.LARGE}) {
    width: ${Screen.LARGE} !important;
    background-position: 652px -238px;
  }
`;

export const Type = styled.div<IType>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? changeOpacity(backgroundColor, 0.15) : "none"};
  border-radius: 1rem;
  color: ${({ color }) => color || "black"};
  display: flex;
  padding: 0.5rem;
  text-transform: capitalize;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;
