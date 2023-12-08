import { useState, useEffect } from "react";

export const useScroll = (onChange) => {
  const [state, setState] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
