import type { NextPage } from "next";
import { Provider } from "react-redux";
import { pokemonStore } from "../../store/pokemon";
import ContainersPokemon from "../../containers/Pokemon";
import ComponentsUiLayout from "../../components/Ui/Layout";

const Pokemon: NextPage = () => {
  return (
    <ComponentsUiLayout>
      <Provider store={pokemonStore}>
        <ContainersPokemon />
      </Provider>
    </ComponentsUiLayout>
  );
};

export default Pokemon;
