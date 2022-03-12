import { Colors } from "../../enum/colors";
import ComponentsSearch from "../../components/Search";
import ComponentsUiButton from "../../components/Ui/Button";
import ComponentsUiCard from "../../components/Ui/Card";

import * as Styles from "./Menu.styles";
import Link from "next/link";

const menu = [
  {
    backgroundColor: Colors.MEDIUM_SEA_GREEN,
    color: Colors.WHITE,
    name: "Pokédex",
    url: "/pokedex",
  },
  {
    backgroundColor: Colors.VERMILION,
    color: Colors.WHITE,
    name: "Moves",
    url: "/moves",
  },
  {
    backgroundColor: Colors.SAPPHIRE,
    color: Colors.WHITE,
    name: "Abilities",
    url: "/abilities",
  },
  {
    backgroundColor: Colors.DEEP_CARROT_ORANGE,
    color: Colors.WHITE,
    name: "Items",
    url: "/items",
  },
  {
    backgroundColor: Colors.PHILIPPINE_GRAY,
    color: Colors.WHITE,
    name: "Locations",
    url: "/locations",
  },
];

const Menu = () => {
  return (
    <ComponentsUiCard width="100%">
      <Styles.HeaderContainer>
        <h2>What Pokémon are you looking for?</h2>
        <ComponentsSearch />
      </Styles.HeaderContainer>
      <Styles.ButtonContainer>
        {menu.map(({ backgroundColor, color, name, url }) => (
          <ComponentsUiButton
            shadowed
            backgroundColor={backgroundColor}
            color={color}
            key={name}
            shadowColor={backgroundColor}
          >
            <div style={{ margin: "1rem" }}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </div>
          </ComponentsUiButton>
        ))}
      </Styles.ButtonContainer>
    </ComponentsUiCard>
  );
};

export default Menu;
