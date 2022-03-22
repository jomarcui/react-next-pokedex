import { Key, MouseEvent, useEffect, useState, VFC } from "react";
import {
  useGetEvolutionsQuery,
  useGetPokemonByNameQuery,
  useGetSpecieQuery,
} from "../../services/pokemon";
import ComponentsUiLoader from "../../components/Ui/Loader";
import ComponentsUiCard from "../../components/Ui/Card";
import * as Styles from "./Pokemon.styles";
import { Colors } from "../../enum/colors";
import Image from "next/image";
import { formatId } from "../../helpers/pokemon";

interface IDetails {
  pokemon: any;
}

interface IArtworkContainer {
  pokemon: any;
}

interface IPokemon {
  name: string;
}

const getEvolutions = (pokemon: any) => {
  const {
    chain: { evolves_to },
  } = pokemon;

  const evolutions = evolves_to.map(({ species: { name } }) => ({ name }));

  console.log("evolutions", evolutions);

  return [];
};

const getFlavorTexts = (pokemon: any) => {
  if (!pokemon) return [];

  const enFlavorTexts = pokemon.flavor_text_entries.filter(
    ({ language, version }: any) =>
      language.name === "en" && version.name === "red"
  );

  const flavorTexts = enFlavorTexts.map((enFlavorText: any) => ({
    flavor_text: enFlavorText.flavor_text
      .replace("\f", "\n")
      .replace("\u00ad\n", "")
      .replace("\u00ad", "")
      .replace(" -\n", " - ")
      .replace("-\n", "-")
      .replace("\n", " "),
  }));

  return flavorTexts;
};

const ArtworkContainer: VFC<IArtworkContainer> = ({ pokemon }) => {
  const {
    id,
    name,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    types,
  } = pokemon;

  const { data, error, isLoading } = useGetSpecieQuery(id);

  const lightBackgroundColors = [Colors.NORMAL];

  const colorFromType = Colors[types[0].type.name.toUpperCase()];
  const color = lightBackgroundColors.includes(colorFromType)
    ? Colors.PHILIPPINE_GRAY
    : Colors.WHITE;
  const typeBackgroundColor = lightBackgroundColors.includes(colorFromType)
    ? Colors.PHILIPPINE_GRAY
    : Colors.WHITE;

  return (
    <Styles.MasterContainer>
      <div style={{ alignItems: "center", display: "flex" }}>
        <div>
          <h2 style={{ color: "white", textTransform: "capitalize" }}>
            {name}
          </h2>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <h5 style={{ color: "white" }}>#{formatId(id, 3)}</h5>
        </div>
      </div>
      <div style={{ alignItems: "center", display: "flex" }}>
        <div>
          <Styles.Ul>
            {types.map(({ type: { name } }: any, i: Key) => (
              <li key={i}>
                <Styles.Type
                  backgroundColor={typeBackgroundColor}
                  color={color}
                >
                  {name}
                </Styles.Type>
              </li>
            ))}
          </Styles.Ul>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            marginLeft: "auto",
            textAlign: "right",
          }}
        >
          {console.log(data?.egg_groups.map(({ name }: any) => name).join(","))}
          <span
            style={{ color: "white", textTransform: "capitalize" }}
          >{`${data?.egg_groups
            .map(({ name }: any) => name)
            .join(", ")} Pokémon`}</span>
        </div>
      </div>
      <div>
        <Styles.ImageContainer>
          {front_default && (
            <Image alt={name?.toString()} layout="fill" src={front_default} />
          )}
        </Styles.ImageContainer>
      </div>
    </Styles.MasterContainer>
  );
};

const Details: VFC<IDetails> = ({ pokemon: { id, moves, stats } }) => {
  const { data: specieData } = useGetSpecieQuery(id);
  const { data: evolutionsData } = useGetEvolutionsQuery(id);

  const [selectedTabId, setSelectedTabId] = useState(0);

  const tabs = [
    { id: 0, name: "About", content: getFlavorTexts(specieData) },
    { id: 1, name: "Stats", content: stats },
    { id: 2, name: "Evolution", content: getEvolutions(evolutionsData) },
    { id: 3, name: "Moves", content: moves },
  ];

  const selectedTab = tabs[selectedTabId];
  const { id: tabId, content } = selectedTab;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
    setSelectedTabId(parseInt(e.currentTarget.value));

  const renderContent = (id: number, content: []) => {
    switch (id) {
      case 0:
        return (
          <>
            {content.map(({ flavor_text }, i: Key) => (
              <li key={i}>
                <div>{flavor_text}</div>
              </li>
            ))}
          </>
        );

      case 1:
        return (
          <>
            {content.map(({ base_stat, stat: { name } }, i: Key) => (
              <li key={i}>
                <div>{name}</div>
                <div>{base_stat}</div>
              </li>
            ))}
          </>
        );

      case 3:
        return (
          <>
            {content.map(({ move: { name } }, i: Key) => (
              <li key={i}>
                <div>{name}</div>
              </li>
            ))}
          </>
        );

      default:
        break;
    }
  };

  return (
    <Styles.TabsContainer>
      <Styles.Ul justifyContent="space-around">
        {tabs.map(({ id, name }) => (
          <li key={id}>
            <button onClick={handleClick} value={id}>
              {name}
            </button>
          </li>
        ))}
      </Styles.Ul>
      <div>
        <Styles.Ul flexDirection="column">
          {renderContent(tabId, content)}
        </Styles.Ul>
      </div>
    </Styles.TabsContainer>
  );
};

const Pokemon: VFC<IPokemon> = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  const [backgroundColor, setBackgroundColor] = useState(Colors.WHITE);

  useEffect(() => {
    if (!data) return;

    const { types } = data;

    const backgroundColor = Colors[types[0].type.name.toUpperCase()];

    setBackgroundColor(backgroundColor);
  }, [data]);

  if (isLoading) {
    return <ComponentsUiLoader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Styles.GlobalStyle backgroundColor={backgroundColor} />
      <ArtworkContainer pokemon={data} />
      <ComponentsUiCard width="100%">
        <Details pokemon={data} />
      </ComponentsUiCard>
    </>
  );
};

export default Pokemon;
