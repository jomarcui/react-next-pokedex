import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

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
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
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
        <Title>Pokédex</Title>
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
