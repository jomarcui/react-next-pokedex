import { CSSProperties } from "react";
import { useGetPokemonQuery } from "../../services/pokemon";
import Textbox from "../Ui/Textbox";

type SearchProps = {
  style?: CSSProperties;
};

const Search = ({ style }: SearchProps) => {
  const { data, error, isLoading } = useGetPokemonQuery(151);

  console.log(data);

  return <Textbox placeholder="Search pokémon" style={style} />;
};

export default Search;
