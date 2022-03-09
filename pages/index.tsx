import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ComponentsSearch from "../components/Search";
import MainContainer from "../components/Ui/MainContainer";

const Attribution = styled.a`
  color: hsl(228, 45%, 44%);
  font-size: 0.75rem;
`;

const Container = styled.div`
  padding: 0 2rem;
`;

const Footer = styled.footer`
  padding: 2rem 0;
  font-size: 0.75rem;
  text-align: center;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  height: 266.75px;
  max-width: 90%;
  position: relative;
  width: 25rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          <Image alt="Pokemon Logo" layout="fill" src="/pokemon-logo.png" />
        </Title>
        <MainContainer>
          <div>
            <h2>What Pokémon are you looking for?</h2>
            <ComponentsSearch />
          </div>
        </MainContainer>
      </Main>

      <Footer>
        A React/Next Project by{" "}
        <Attribution
          href="https://github.com/jomarcui"
          rel="noreferrer"
          target="_blank"
        >
          Jomar H. Cui
        </Attribution>
        .
      </Footer>
    </Container>
  );
};

export default Home;
