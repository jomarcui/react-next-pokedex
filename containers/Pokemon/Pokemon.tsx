import { Key, MouseEvent, useEffect, useState, VFC } from "react";
import {
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
  data: any;
}

interface IMasterContainerProps {
  pokemon: any;
}

interface IPokemon {
  name: string;
}

const Details: VFC<IDetails> = ({ data }) => {
  const [selectedTabId, setSelectedTabId] = useState(0);

  const tabs = [
    { id: 0, name: "About", content: [] },
    { id: 1, name: "Stats", content: data.stats },
    { id: 2, name: "Evolution", content: [] },
    { id: 3, name: "Moves", content: data.moves },
  ];

  const selectedTab = tabs[selectedTabId];
  const { id, content } = selectedTab;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
    setSelectedTabId(parseInt(e.currentTarget.value));

  const renderContent = (id: number, content: []) => {
    console.log(id);
    switch (id) {
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
        break;
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
        break;

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
          {renderContent(id, content)}
        </Styles.Ul>
      </div>
    </Styles.TabsContainer>
  );
};

const MasterContainer: VFC<IMasterContainerProps> = ({ pokemon }) => {
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
          style={{ alignItems: "center", display: "flex", marginLeft: "auto" }}
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
      <MasterContainer pokemon={data} />
      <ComponentsUiCard width="100%">
        <Details data={data} />
      </ComponentsUiCard>
    </>
  );
};

export default Pokemon;
