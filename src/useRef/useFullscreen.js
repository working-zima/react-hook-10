import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }
      if (element.current.moxRequestFullScreen) {
        element.current.moxRequestFullScreen();
      }
      if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      }
      if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      }
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    }
  };
  return { element, triggerFull, exitFull };
};
