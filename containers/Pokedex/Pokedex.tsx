import { Key } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "../../services/pokemon";
import ComponentsUiButton from "../../components/Ui/Button";
import ComponentsUiCard from "../../components/Ui/Card";
import ComponentsuiLoader from "../Loader";
import Image from "next/image";
import { Colors } from "../../enum/colors";

import * as Styles from "./Pokedex.styles";
import { type } from "os";

type PokemonCardProps = {
  name: string;
};

type MenusProps = {
  data?: any;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: any;
};

const lightBackgroundColors = [Colors.NORMAL];

const Card = ({ name }: PokemonCardProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <ComponentsuiLoader />;
  }

  if (!data) {
    return null;
  }

  console.log(data);

  const {
    sprites: {
      versions: {
        "generation-v": {
          "black-white": {
            animated: { front_default },
          },
        },
      },
    },
    types,
  } = data;

  const backgroundColor = Colors[types[0].type.name.toUpperCase()];
  const color = lightBackgroundColors.includes(backgroundColor)
    ? Colors.PHILIPPINE_GRAY
    : Colors.WHITE;

  return (
    <ComponentsUiButton backgroundColor={backgroundColor} color={color}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ textTransform: "capitalize" }}>
          <div style={{ marginBottom: "1rem" }}>{name}</div>
          <Styles.Ul>
            {types.map(({ type }: any, i: Key) => (
              <li key={i}>
                <Styles.Type backgroundColor={Colors.WHITE} color={color}>
                  {type.name}
                </Styles.Type>
              </li>
            ))}
          </Styles.Ul>
        </div>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            minWidth: "100px",
            position: "relative",
          }}
        >
          <div style={{ margin: "auto 0 0 auto" }}>
            <img alt={name} src={front_default} />
          </div>
        </div>
      </div>
    </ComponentsUiButton>
  );
};

const List = ({ data, error, isLoading }: MenusProps) => {
  if (isLoading) {
    return <ComponentsuiLoader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return null;
  }

  return data?.map((pokemon: any, i: Key) => (
    <Card key={i} name={pokemon.name} />
  ));
};

const Pokedex = () => {
  const { data, error, isLoading } = useGetPokemonQuery(151);

  return (
    <ComponentsUiCard>
      <div>
        <h2>Pokédex</h2>
      </div>
      <Styles.MenuContainer>
        <List data={data?.results} error={error} isLoading={isLoading} />
      </Styles.MenuContainer>
    </ComponentsUiCard>
  );
};

export default Pokedex;
