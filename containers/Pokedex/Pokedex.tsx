import { Key, useState } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "../../services/pokemon";
import ComponentsUiButton from "../../components/Ui/Link";
import ComponentsUiCard from "../../components/Ui/Card";
import ComponentsUiLoader from "../../components/Ui/Loader";
import Image from "next/image";
import { Colors } from "../../enum/colors";

import * as Styles from "./Pokedex.styles";
import Link from "next/link";

type PokemonCardProps = {
  name: string;
};

type ListProps = {
  data?: any;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: any;
};

const lightBackgroundColors = [Colors.NORMAL];

const Card = ({ name }: PokemonCardProps) => {
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
    <ComponentsUiButton
      shadowed
      backgroundColor={backgroundColor}
      backgroundColorOpacity={0.7}
      color={color}
      shadowColor={backgroundColor}
    >
      <Link href={`/pokemon/${name}`}>
        <a>
          <div style={{ display: "flex", height: "100%" }}>
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
                      color={color}
                    >
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
        </a>
      </Link>
    </ComponentsUiButton>
  );
};

const List = ({ data, error, isLoading }: ListProps) => {
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

const Pokedex = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { data, error, isLoading } = useGetPokemonQuery({
    pageNumber,
    limit: LIMIT,
  });

  const handleClickNext = () =>
    setPageNumber((currentPageNumber) => (currentPageNumber += LIMIT));

  const handleClickPrevious = () => {
    if (pageNumber === 0) return;

    setPageNumber((currentPageNumber) => (currentPageNumber -= LIMIT));
  };

  return (
    <ComponentsUiCard>
      <Styles.HeaderContainer>
        <h2>Pokédex</h2>
        <Styles.PagingContainer>
          <Styles.PagingButton
            disabled={pageNumber === 0 || isLoading}
            onClick={handleClickPrevious}
          >
            Prev
          </Styles.PagingButton>
          <Styles.PagingButton disabled={isLoading} onClick={handleClickNext}>
            Next
          </Styles.PagingButton>
        </Styles.PagingContainer>
      </Styles.HeaderContainer>
      <Styles.MenuContainer>
        <List data={data?.results} error={error} isLoading={isLoading} />
      </Styles.MenuContainer>
    </ComponentsUiCard>
  );
};

export default Pokedex;
