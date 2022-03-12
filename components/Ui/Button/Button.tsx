import { ReactNode } from "react";
import * as Styles from "./Button.styles";

type ButtonProps = {
  backgroundColor?: string;
  backgroundImageColor?: string;
  children?: ReactNode;
  color?: string;
  height?: number;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number | string;
};

const Button = (buttonProps: ButtonProps) => {
  const { children, ...otherProps } = buttonProps;
  return <Styles.Button {...otherProps}>{children}</Styles.Button>;
};

export default Button;
