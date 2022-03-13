import { MouseEvent, ReactNode } from "react";
import * as Styles from "./Button.styles";

type ButtonProps = {
  backgroundColor?: string;
  backgroundColorOpacity?: number;
  backgroundImageColor?: string;
  children?: ReactNode;
  color?: string;
  height?: number;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number | string;
  handleClick?: () => void;
};

const Button = (buttonProps: ButtonProps) => {
  const { children, handleClick: _handleClick, ...otherProps } = buttonProps;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (_handleClick) _handleClick();
  };

  return (
    <Styles.Button {...otherProps} onClick={handleClick}>
      {children}
    </Styles.Button>
  );
};

export default Button;
