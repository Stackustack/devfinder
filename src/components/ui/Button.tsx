import classes from "./Button.module.css";

type ButtonType = {
  text: string;
};

const Button = ({ text }: ButtonType) => {
  return <button className={classes.button}>{text}</button>;
};

export default Button;
