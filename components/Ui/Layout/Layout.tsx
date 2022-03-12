import { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import * as Styles from "./Layout.styles";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styles.Container>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Main>
        <Styles.Title>
          <Image
            alt="Pokémon Logo"
            layout="fill"
            priority
            src="/pokemon-logo.png"
          />
        </Styles.Title>
        {children}
      </Styles.Main>

      <Styles.Footer>
        A React/Next Project by{" "}
        <Styles.Attribution
          href="https://github.com/jomarcui"
          rel="noreferrer"
          target="_blank"
        >
          Jomar H. Cui
        </Styles.Attribution>
        .
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Layout;
