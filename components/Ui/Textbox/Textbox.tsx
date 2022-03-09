import { ReactNode } from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as Styles from "./Textbox.styles";
import { Colors } from "../../../enum/colors";

type TextboxProps = {
  children?: ReactNode;
  placeholder: string;
};

const Textbox = ({ children, placeholder }: TextboxProps) => {
  return (
    <Styles.TextboxContainer className="jsTextboxContainer">
      <div className="search-icon-container">
        <SearchIcon sx={{ color: Colors.DARK_CHARCOAL }} />
      </div>
      <Styles.Textbox placeholder={placeholder} type="text" />
    </Styles.TextboxContainer>
  );
};

export default Textbox;
