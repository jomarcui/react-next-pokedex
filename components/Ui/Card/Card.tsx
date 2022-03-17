import { ReactNode, VFC } from "react";
import * as Styles from "./Card.styles";

interface ICard {
  backgroundColor?: string;
  backgroundImageColor?: string;
  children?: ReactNode;
  color?: string;
  height?: number;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number | string;
}

const Card: VFC<ICard> = (cardProps) => {
  const { children, ...otherProps } = cardProps;
  return <Styles.Card {...otherProps}>{children}</Styles.Card>;
};

export default Card;
