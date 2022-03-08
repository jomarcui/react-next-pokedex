import { ReactNode } from "react";
import * as Styles from "./MainContainer.styles";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <Styles.Main>{children}</Styles.Main>;
};

export default MainContainer;
