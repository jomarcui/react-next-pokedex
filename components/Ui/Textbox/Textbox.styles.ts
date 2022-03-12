import styled from "styled-components";
import { Colors } from "../../../enum/colors";

export const Textbox = styled.input`
  background: ${Colors.CULTURED};
  border: none;
  border-radius: 0 1rem 1rem 0;
  color: ${Colors.PHILIPPINE_GRAY};
  font-size: 1rem;
  padding: 0.75rem;

  :focus-visible {
    outline: none;
  }
`;

export const TextboxContainer = styled.div`
  align-items: stretch;
  color: ${Colors.PHILIPPINE_GRAY};
  display: flex;

  .search-icon-container {
    align-items: center;
    background: ${Colors.CULTURED};
    border-radius: 1rem 0 0 1rem;
    display: flex;
    padding: 0.75rem;
  }
`;
