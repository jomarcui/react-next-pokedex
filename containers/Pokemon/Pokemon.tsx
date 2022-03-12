import { Key, useEffect, useState } from "react";
import { useRouter } from "next/router";
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

type DetailsProps = {
  name: string | string[] | undefined;
};

type MasterContainerProps = {
  pokemon: any;
};

const lightBackgroundColors = [Colors.NORMAL];

const Details = ({ name }: DetailsProps) => {
  return (
    <div>{/* <div style={{ textTransform: "capitalize" }}>{name}</div> */}</div>
  );
};

const MasterContainer = ({ pokemon }: MasterContainerProps) => {
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
          {/* <Styles.Ul>
            {data?.egg_groups.map(({ name }: any, i: Key) => (
              <li key={i}>
                <span
                  style={{ color: "white", textTransform: "capitalize" }}
                >{`${name} Pokémon`}</span>
              </li>
            ))}
          </Styles.Ul> */}
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

const Pokemon = () => {
  const [backgroundColor, setBackgroundColor] = useState(Colors.WHITE);

  const {
    query: { name },
  } = useRouter();

  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  useEffect(() => {
    if (!data) return;

    console.log(data);

    const {
      sprites: {
        other: {
          "official-artwork": { front_default },
        },
      },
      types,
    } = data;

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
        <Details name={name} />
      </ComponentsUiCard>
    </>
  );
};

export default Pokemon;
