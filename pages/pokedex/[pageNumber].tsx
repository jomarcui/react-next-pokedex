import type { NextPage } from "next";
import { Provider } from "react-redux";
import { pokemonStore } from "../../store/pokemon";
import ContainersPokedex from "../../containers/Pokedex";
import ComponentsUiLayout from "../../components/Ui/Layout";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { query } = useRouter();
  const pageNumber: number = parseInt(query.pageNumber as string) || 0;

  return (
    <ComponentsUiLayout>
      <Provider store={pokemonStore}>
        <ContainersPokedex pageNumber={pageNumber} />
      </Provider>
    </ComponentsUiLayout>
  );
};

export default Home;
