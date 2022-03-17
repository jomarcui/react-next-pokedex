import Link from "next/link";
import { FC, ReactNode } from "react";
import * as Styles from "./Link.styles";

interface IButton {
  backgroundColor?: string;
  backgroundColorOpacity?: number;
  backgroundImageColor?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundSize?: number | string;
  children?: ReactNode;
  color?: string;
  height?: number;
  href: string;
  padding?: number;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number | string;
}

const Button: FC<IButton> = (buttonProps) => {
  const { children, href, ...otherProps } = buttonProps;

  return (
    <Link href={href} passHref>
      <Styles.Button {...otherProps}>{children}</Styles.Button>
    </Link>
  );
};

export default Button;
