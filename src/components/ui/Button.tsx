import classes from "./Button.module.css";
import { ReactNode } from "react";

type ButtonType = {
  text: string | ReactNode;
  onClick?: (e: any) => void;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${
        disabled ? classes["button--disabled"] : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
