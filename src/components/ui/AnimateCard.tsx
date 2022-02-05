import { animated, useTransition } from "@react-spring/web";
import { useContext, useEffect, useState, createContext } from "react";
import { AppContext } from "../../store/app-context";
import { useProfile } from "../../store/Profile/useProfileResult";

const AnimateCard = ({ children }: any) => {
  const [isProfileDisplayed, setIsProfileDisplayed] = useState(false);

  const { created_at } = useProfile();
  const { isError, isLoading, inputValue } = useContext(AppContext);

  const transitions = useTransition(isProfileDisplayed, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 100, opacity: 0 },
  });

  // Animate result card
  useEffect(() => {
    if (isLoading) {
      setIsProfileDisplayed(false);
    } else if (created_at || isError) {
      setIsProfileDisplayed(true);
    }
  }, [created_at, isError, isLoading, inputValue]);

  return transitions((style, item) =>
    item ? <animated.div style={style}>{children}</animated.div> : ""
  );
};

export default AnimateCard;
