import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }
    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return element;
};
