import { Provider } from "react-redux";
import { pokemonStore } from "../../store/pokemon";
import { Colors } from "../../enum/colors";
import ComponentsSearch from "../../components/Search";
import ComponentsUiButton from "../../components/Ui/Button";
import ComponentsUiCard from "../../components/Ui/Card";

import * as Styles from "./Pokemon.styles";

const Pokemon = () => {
  const menu = [
    {
      backgroundColor: Colors.MEDIUM_SEA_GREEN,
      color: Colors.WHITE,
      name: "Pokédex",
    },
    { backgroundColor: Colors.VERMILION, color: Colors.WHITE, name: "Moves" },
    {
      backgroundColor: Colors.SAPPHIRE,
      color: Colors.WHITE,
      name: "Abilities",
    },
    {
      backgroundColor: Colors.DEEP_CARROT_ORANGE,
      color: Colors.WHITE,
      name: "Items",
    },
    {
      backgroundColor: Colors.PHILIPPINE_GRAY,
      color: Colors.WHITE,
      name: "Locations",
    },
  ];

  return (
    <Provider store={pokemonStore}>
      <ComponentsUiCard width="100%">
        <div>
          <h2>What Pokémon are you looking for?</h2>
          <ComponentsSearch style={{ margin: "2rem 0" }} />
        </div>
        <Styles.ButtonContainer>
          {menu.map(({ backgroundColor, color, name }) => (
            <ComponentsUiButton
              shadowed
              backgroundColor={backgroundColor}
              color={color}
              key={name}
              shadowColor={backgroundColor}
              width="100%"
            >
              <div style={{ margin: "1rem" }}>{name}</div>
            </ComponentsUiButton>
          ))}
        </Styles.ButtonContainer>
      </ComponentsUiCard>
    </Provider>
  );
};

export default Pokemon;
