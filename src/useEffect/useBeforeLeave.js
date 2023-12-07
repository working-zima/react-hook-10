import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };

    if (typeof onBefore !== "function") {
      return;
    }

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
};
