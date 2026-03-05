import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Will update this later. for smooth scroll.

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smooth: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
};

export default LenisProvider;
