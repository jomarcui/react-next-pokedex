import type { NextPage } from "next";
import { Provider } from "react-redux";
import { pokemonStore } from "../store/pokemon";
import ContainersMenu from "../containers/Menu";
import ComponentsUiLayout from "../components/Ui/Layout";

const Home: NextPage = () => {
  return (
    <ComponentsUiLayout>
      <Provider store={pokemonStore}>
        <ContainersMenu />
      </Provider>
    </ComponentsUiLayout>
  );
};

export default Home;
