import gsap from "gsap";
import { useEffect, useRef } from "react";

interface options {
  y?: string;
  repeat?: number;
  yoyo?: boolean;
  duration?: number;
  ease?: string;
}

function useAnimateImage(options?: options) {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      y: options?.y || "-20px", // default move up 20px
      repeat: options?.repeat || -1, // default infinite loop
      yoyo: options?.yoyo || true, // default reverse animation
      duration: options?.duration || 2, // default 2 seconds
      ease: options?.ease || "power1.inOut", // default smooth easing
    });
  }, [options]);

  return imageRef;
}

export default useAnimateImage;
