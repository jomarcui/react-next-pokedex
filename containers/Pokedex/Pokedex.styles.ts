import styled from "styled-components";
import { Colors } from "../../enum/colors";
import { changeOpacity } from "../../helpers/colors";

interface IType {
  backgroundColor?: string;
  color?: string;
}

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-between;

  button {
    flex-grow: 1;
  }
`;

export const PagingButton = styled.a`
  background-color: ${Colors.BALL_BLUE};
  border: none;
  border-radius: 1rem;
  color: ${Colors.WHITE};
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  transition: background-color 0.15s, padding 0.15s;

  &:disabled {
    background-color: ${changeOpacity(Colors.BALL_BLUE, 0.7)};
    color: ${Colors.CULTURED};
  }

  &:hover {
    padding: 1.125rem;
  }
`;

export const PagingContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-left: auto;
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
  text-transform: capitalize;
`;
