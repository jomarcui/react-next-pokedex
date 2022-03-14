import Link from "next/link";
import { FC, ReactNode } from "react";
import * as Styles from "./Link.styles";

type ButtonProps = {
  backgroundColor?: string;
  backgroundColorOpacity?: number;
  backgroundImageColor?: string;
  children?: ReactNode;
  color?: string;
  height?: number;
  href: string;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number | string;
};

const Button: FC<ButtonProps> = (buttonProps) => {
  const { children, href, ...otherProps } = buttonProps;

  return (
    <Link href={href} passHref>
      <Styles.Button {...otherProps}>{children}</Styles.Button>
    </Link>
  );
};

export default Button;
