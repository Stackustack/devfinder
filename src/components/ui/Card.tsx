import classes from "./Card.module.css";

type Card = {
  children?: React.ReactNode;
  bgColor?: string;
  className?: string;
};

const Card = ({ children, className }: Card) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
