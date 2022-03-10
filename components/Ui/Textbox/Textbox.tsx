import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as Styles from "./Textbox.styles";
import { Colors } from "../../../enum/colors";

type TextboxProps = {
  placeholder: string;
};

const Textbox = ({ placeholder }: TextboxProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchKeyword(e.target.value);

  return (
    <Styles.TextboxContainer className="jsTextboxContainer">
      <div className="search-icon-container">
        <SearchIcon sx={{ color: Colors.DARK_CHARCOAL }} />
      </div>
      <Styles.Textbox
        aria-label="pokemon-search"
        placeholder={placeholder}
        type="text"
        value={searchKeyword}
        onChange={handleChange}
      />
    </Styles.TextboxContainer>
  );
};

export default Textbox;
