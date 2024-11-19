import { useEffect } from "react";

export const useMouseMoveEffect = (): void => {
  const handleMouseMove = (e: MouseEvent): void => {
    const elements = document.querySelectorAll<HTMLElement>(".movable");
    elements.forEach((element) => {
      const offsetX = e.clientX / 150; // Random offset
      const offsetY = e.clientY / 150; // Random offset
      element.style.transform = `translate(${offsetX}%, ${offsetY}%) skew(${
        offsetY / 10
      }deg,${offsetX / 10}deg)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};
