import classes from "./Card.module.css";

type CardTypes = {
  children?: React.ReactNode;
  bgColor?: string;
  className?: string;
};

const Card = ({ children, className }: CardTypes) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
