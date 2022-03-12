import { ReactNode } from "react";
import * as Styles from "./Card.styles";

type CardProps = {
  backgroundColor?: string;
  backgroundImageColor?: string;
  children: ReactNode;
  color?: string;
  height?: number;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number;
};

const Card = (cardProps: CardProps) => {
  const { children, ...otherProps } = cardProps;
  return <Styles.Card {...otherProps}>{children}</Styles.Card>;
};

export default Card;
