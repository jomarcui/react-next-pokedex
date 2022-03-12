import { useRouter } from "next/router";
import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "../../services/pokemon";
import ComponentsUiLoader from "../../components/Ui/Loader";
import ComponentsUiCard from "../../components/Ui/Card";

const Pokemon = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useGetPokemonByNameQuery(query.name);

  console.log(data);

  return (
    <ComponentsUiCard>
      {isLoading && <ComponentsUiLoader />}

      {!isLoading && (
        <div>
          <div style={{ textTransform: "capitalize" }}>{data.name}</div>
        </div>
      )}
    </ComponentsUiCard>
  );
};

export default Pokemon;
