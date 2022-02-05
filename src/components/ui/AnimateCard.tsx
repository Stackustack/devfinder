import { animated, useTransition } from "@react-spring/web";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/app-context";

const AnimateCard = ({ children }: any) => {
  const [isProfileDisplayed, setIsProfileDisplayed] = useState(false);

  const { profileResult, isError, isLoading, inputValue } =
    useContext(AppContext);
  const { joinedDate } = profileResult;

  const transitions = useTransition(isProfileDisplayed, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 100, opacity: 0 },
  });

  // Animate result card
  useEffect(() => {
    if (isLoading) {
      setIsProfileDisplayed(false);
    } else if (joinedDate || isError) {
      setIsProfileDisplayed(true);
    }
  }, [joinedDate, isError, isLoading, inputValue]);

  return transitions((style, item) =>
    item ? <animated.div style={style}>{children}</animated.div> : ""
  );
};

export default AnimateCard;
