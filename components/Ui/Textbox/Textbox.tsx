import { ChangeEvent, CSSProperties, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import * as Styles from "./Textbox.styles";
import { Colors } from "../../../enum/colors";

type TextboxProps = {
  placeholder?: string;
  style?: CSSProperties;
};

const Textbox = ({ placeholder, style }: TextboxProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchKeyword(e.target.value);

  return (
    <Styles.TextboxContainer className="jsTextboxContainer" style={style}>
      <div className="search-icon-container">
        <SearchIcon sx={{ color: Colors.PHILIPPINE_GRAY }} />
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
