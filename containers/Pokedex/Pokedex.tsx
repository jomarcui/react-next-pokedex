import { Key, useState, VFC } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "../../services/pokemon";
import ComponentsUiLinkButton from "../../components/Ui/Link/Button";
import ComponentsUiCard from "../../components/Ui/Card";
import ComponentsUiLoader from "../../components/Ui/Loader";
import Image from "next/image";
import { Colors } from "../../enum/colors";

import * as Styles from "./Pokedex.styles";
import Link from "next/link";

interface IList {
  data?: any;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: any;
}

interface IPokedex {
  pageNumber: number;
}

type ICard = {
  name: string;
};

const lightBackgroundColors = [Colors.NORMAL];

const getUrl = (param: string) => {
  return `/pokedex/${param}`;
};

const Card: VFC<ICard> = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <ComponentsUiLoader />;
  }

  if (!data) {
    return null;
  }

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

  const colorFromType = Colors[types[0].type.name.toUpperCase()];
  const backgroundColor = colorFromType;
  const color = lightBackgroundColors.includes(colorFromType)
    ? Colors.PHILIPPINE_GRAY
    : Colors.WHITE;
  const typeBackgroundColor = lightBackgroundColors.includes(colorFromType)
    ? Colors.PHILIPPINE_GRAY
    : colorFromType;

  return (
    <ComponentsUiLinkButton
      shadowed
      backgroundColor={backgroundColor}
      backgroundPositionX="right -20px"
      backgroundPositionY="bottom -30px"
      color={Colors.WHITE}
      href={`/pokemon/${name}`}
      shadowColor={backgroundColor}
    >
      <div style={{ display: "flex", gap: "1rem", height: "100%" }}>
        <div>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "left",
              textTransform: "capitalize",
            }}
          >
            {name}
          </div>
          <Styles.Ul>
            {types.map(({ type }: any, i: Key) => (
              <li key={i}>
                <Styles.Type
                  backgroundColor={typeBackgroundColor}
                  color={Colors.WHITE}
                >
                  {type.name}
                </Styles.Type>
              </li>
            ))}
          </Styles.Ul>
        </div>
        <div
          style={{
            margin: "auto 0 0 auto",
          }}
        >
          <img alt={name} src={front_default} />
        </div>
      </div>
    </ComponentsUiLinkButton>
  );
};

const List: VFC<IList> = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <ComponentsUiLoader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return null;
  }

  return data.map(({ name }: any, i: Key) => <Card key={i} name={name} />);
};

const LIMIT = 16;

const Pokedex: VFC<IPokedex> = ({ pageNumber }) => {
  const { data, error, isLoading } = useGetPokemonQuery({
    pageNumber: pageNumber === 0 ? 0 : pageNumber * LIMIT,
    limit: LIMIT,
  });

  const nextPageNumber = pageNumber + 1;
  const prevPageNumber = pageNumber && pageNumber - 1;

  return (
    <ComponentsUiCard>
      <Styles.HeaderContainer>
        <h2>Pokédex</h2>
        <Styles.TopPagingContainer>
          <Link href={getUrl(prevPageNumber.toString())} passHref>
            <Styles.PagingButton>Prev</Styles.PagingButton>
          </Link>
          <Link href={getUrl(nextPageNumber.toString())} passHref>
            <Styles.PagingButton>Next</Styles.PagingButton>
          </Link>
        </Styles.TopPagingContainer>
      </Styles.HeaderContainer>
      <Styles.MenuContainer>
        <List data={data?.results} error={error} isLoading={isLoading} />
      </Styles.MenuContainer>
      <Styles.BottomPagingContainer>
        <Link href={getUrl(prevPageNumber.toString())} passHref>
          <Styles.PagingButton>Prev</Styles.PagingButton>
        </Link>
        <Link href={getUrl(nextPageNumber.toString())} passHref>
          <Styles.PagingButton>Next</Styles.PagingButton>
        </Link>
      </Styles.BottomPagingContainer>
    </ComponentsUiCard>
  );
};

export default Pokedex;
