import { ReactNode } from "react";
import * as Styles from "./Card.styles";

type CardProps = {
  backgroundColor?: string;
  backgroundImageColor?: string;
  children: ReactNode;
  color?: string;
  height?: number;
  width?: number;
};

const Card = ({
  backgroundColor,
  backgroundImageColor,
  children,
  color,
  height,
  width,
}: CardProps) => {
  return (
    <Styles.Card
      backgroundColor={backgroundColor}
      backgroundImageColor={backgroundImageColor}
      color={color}
      height={height}
      width={width}
    >
      {children}
    </Styles.Card>
  );
};

export default Card;
