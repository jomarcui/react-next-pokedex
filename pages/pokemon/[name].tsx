import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { pokemonStore } from "../../store/pokemon";
import ContainersPokemon from "../../containers/Pokemon";
import ComponentsUiLayout from "../../components/Ui/Layout";

const Pokemon: NextPage = () => {
  const {
    query: { name },
  } = useRouter();

  return (
    <ComponentsUiLayout>
      <Provider store={pokemonStore}>
        <ContainersPokemon name={name as string} />
      </Provider>
    </ComponentsUiLayout>
  );
};

export default Pokemon;
