import type { NextPage } from "next";
import { Provider } from "react-redux";
import { pokemonStore } from "../store/pokemon";
import ContainersPokedex from "../containers/Pokedex";
import ComponentsUiLayout from "../components/Ui/Layout";

const Home: NextPage = () => {
  return (
    <ComponentsUiLayout>
      <Provider store={pokemonStore}>
        <ContainersPokedex />
      </Provider>
    </ComponentsUiLayout>
  );
};

export default Home;
