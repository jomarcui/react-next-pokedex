import { Provider } from "react-redux";
import { pokemonStore } from "../../store/pokemon";
import ComponentsSearch from "../../components/Search";
import ComponentsUiCard from "../../components/Ui/Card";
import { Colors } from "../../enum/colors";

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
      <ComponentsUiCard>
        <div>
          <h2>What Pokémon are you looking for?</h2>
          <ComponentsSearch style={{ margin: "2rem 0" }} />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          {menu.map(({ backgroundColor, color, name }) => (
            <ComponentsUiCard
              shadowed
              backgroundColor={backgroundColor}
              color={color}
              key={name}
              shadowColor={backgroundColor}
              width={200}
            >
              {name}
            </ComponentsUiCard>
          ))}
        </div>
      </ComponentsUiCard>
    </Provider>
  );
};

export default Pokemon;
