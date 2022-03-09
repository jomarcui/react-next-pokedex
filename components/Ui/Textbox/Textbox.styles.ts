import styled from "styled-components";
import { Colors } from "../../../enum/colors";

export const Textbox = styled.input`
  background: ${Colors.WHITE_SMOKE};
  border: none;
  border-radius: 0 1rem 1rem 0;
  color: ${Colors.DARK_CHARCOAL};
  font-size: 1rem;
  padding: 0.75rem;

  :focus-visible {
    outline: none;
  }
`;

export const TextboxContainer = styled.div`
  align-items: stretch;
  color: ${Colors.DARK_CHARCOAL};
  display: flex;

  .search-icon-container {
    align-items: center;
    background: ${Colors.WHITE_SMOKE};
    border-radius: 1rem 0 0 1rem;
    display: flex;
    padding: 0.75rem;
  }
`;
