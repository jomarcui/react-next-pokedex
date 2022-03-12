import styled from "styled-components";
import { changeOpacity } from "../../helpers/colors";

interface IType {
  backgroundColor?: string;
  color?: string;
}

export const MenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-between;

  button {
    flex-grow: 1;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Type = styled.div<IType>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? changeOpacity(backgroundColor, 0.15) : "none"};
  border-radius: 1rem;
  color: ${({ color }) => color || "black"};
  display: flex;
  padding: 0.5rem;
`;
